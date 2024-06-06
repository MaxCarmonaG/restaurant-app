"use server";

import { FormState, MealInputType } from "@/types";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const validateMeal = (meal: MealInputType) => {
  for (const [key, value] of Object.entries(meal)) {
    if (key === 'image' && (!value || !value.size)) {
      return key;
    } else if (key === 'creator_email' && !value.includes('@')) {
      return key;
    } else if (typeof value === 'string' && !value.trim()) {
      return key;
    }
  }
  return false;
} 

export const shareMeal = async (state: FormState, formData: FormData) => {

  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  } as MealInputType;

  const invalidFieldKey = validateMeal(meal);

  if (invalidFieldKey) {
    state.message = 'Invalid input: ' + invalidFieldKey;
    return state;
  }
  
  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
