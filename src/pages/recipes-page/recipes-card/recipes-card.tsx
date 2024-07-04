import { FC } from "react";
import { RecipesType } from "../recipes-page-slice.ts";
import s from "./recipes-card.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes.ts";

type RecipesCardProps = {
  recipe: RecipesType;
};
const RecipesCard: FC<RecipesCardProps> = ({ recipe }) => {
  const { name, description, makingAmount, totalTime } = recipe;
  return (
    <div className={s.recipesCardWrapper}>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <br />
        {makingAmount && <p>Make: {makingAmount}</p>}
        {totalTime && <p>Total Time: {totalTime}</p>}
      </div>
      <Link to={AppRoutes.Recipe.replace(":id", recipe.recipeId.toString())}>
        check out this recipe
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-right-long"
          className="svg-inline--fa fa-arrow-right-long "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default RecipesCard;
