import { FC } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PagePros } from "@/types";
import { getMeal } from "@/lib/meals";

import classes from "./page.module.css";

const MealDetailPage: FC<PagePros> = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if(!meal) return notFound();

  meal.instructions = meal.instructions.replaceAll(/\n/g, "<br />");

  const { title, image, summary, instructions, creator, creatorEmail } = meal;

  return (
  <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={image} fill alt={title} />
      </div>
      <div className={classes.headerText}>
        <h1>{title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${creatorEmail}`}>{creator}</a>
        </p>
        <p className={classes.summary}>{summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: instructions
      }}></p>
    </main>
  </>
)};

export default MealDetailPage;
