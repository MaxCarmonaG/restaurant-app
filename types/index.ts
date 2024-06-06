export interface PagePros {
  params: {
    [key: string]: string;
  }
}

export interface MealDataType {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealInputType extends Omit<MealDataType, 'id' | 'slug' | 'image'> {
  image: File;
}

export interface FormState {
  message: string | null
}
