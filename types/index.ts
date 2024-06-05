export interface PagePros {
  params: {
    [key: string]: string;
  }
}

export interface MealItemType {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creatorEmail: string;
}
