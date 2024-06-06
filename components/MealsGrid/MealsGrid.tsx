import { FC } from "react";
import classes from "./MealsGrid.module.css";
import MealItem from "../MealItem";
import { MealDataType } from "@/types";

interface MealsGridPros {
  meals: MealDataType[];
}

const MealsGrid: FC<MealsGridPros> = ({ meals }) => {
  
  return (
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
