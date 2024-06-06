import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { MealDataType, MealInputType } from "@/types";

const db = sql('./database/meals.db');

export const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return db.prepare<unknown[], MealDataType>('SELECT * FROM meals').all();
};

export const getMeal = (slug: string) => {
  return db.prepare<string, MealDataType>('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export const saveMeal = async (meal: MealInputType) => {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  const image = `/images/${fileName}`;

  const data = { ...meal, slug, instructions, image };

  db.prepare(`
    INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(data);
};
