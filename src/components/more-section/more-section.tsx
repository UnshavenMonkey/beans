import s from "./more-section.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes.ts";
import { FC } from "react";
import { RecipesType } from "../../pages/recipes-page/recipes-page-slice.ts";
import { CombinationsType } from "../../pages/combinations-page/combinations-page-slice.ts";
import comb from "../../assets/images/comb.png";

const MoreSection: FC<{
  recipe: RecipesType;
  combination: CombinationsType;
}> = ({ recipe, combination }) => {
  return (
    <div className={s.moreContainer}>
      <div>
        <div className={s.moreWrapper}>
          <h2>Explore More ...</h2>
          <div className={s.recipesWraper}>
            <div>
              <Link to={AppRoutes.Recipes}>Click here for more recipes</Link>
            </div>
            <br />
            <h3>{recipe?.name}</h3>
            <p>Recipe for {recipe?.makingAmount}</p>
            <p>{recipe?.description}</p>
            <img src={recipe?.imageUrl} alt="recipe" />
            <Link
              to={AppRoutes.Recipe.replace(":id", recipe?.recipeId.toString())}
            >
              Check out {recipe?.name} Recipe
            </Link>
          </div>
          <div className={s.recipesWraper}>
            <div>
              <Link to={AppRoutes.Combinations}>
                Click here for more combinations
              </Link>
            </div>
            <br />
            <h3>{combination?.name}</h3>
            <p>{combination?.tag}</p>
            <img src={comb} alt="combination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
