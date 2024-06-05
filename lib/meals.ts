import sql from "better-sqlite3";
import { MealItemType } from "@/types";

const db = sql('./database/meals.db');

export const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('An Error!');
  return db.prepare<unknown[], MealItemType>('SELECT * FROM meals').all();
};

export const getMeal = (slug: string) => {
  return db.prepare<string, MealItemType>('SELECT * FROM meals WHERE slug = ?').get(slug);
};
