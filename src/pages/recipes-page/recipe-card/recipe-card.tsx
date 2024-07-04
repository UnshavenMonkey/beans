import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store.ts";
import { useEffect, useState } from "react";
import { AppRoutes } from "../../../routes.ts";
import { getRecipe, RecipesType } from "../recipes-page-slice.ts";
import s from "./recipe-card.module.scss";
const RecipeCard = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipesType | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(getRecipe(id)).then((res) =>
        setRecipe(res.payload as RecipesType),
      );
    }
  }, [id]);

  return (
    <div className={s.container}>
      <div className={s.beanCard}>
        <div className={s.beanCardWrapper}>
          <h3>{recipe?.name}</h3>
        </div>
        <div className={s.beanCardWrapper}>
          <p>{recipe?.description}</p>
        </div>
        <div className={s.beanCardWrapper}>
          <p className={s.beanTextLeft}>Preparation time: {recipe?.prepTime}</p>
          <p className={s.beanTextLeft}>Cook time: {recipe?.cookTime}</p>
          <p className={s.beanTextLeft}>Total time: {recipe?.totalTime}</p>
          <p className={s.beanTextLeft}>Recipe makes {recipe?.makingAmount}</p>
        </div>
        <div className={s.imgWrapper}>
          <img src={recipe?.imageUrl} alt={recipe?.name} />
        </div>
        <div className={s.itemWrapper}>
          <h4>Ingredients</h4>
          <ul>
            {recipe?.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={s.itemWrapper}>
          <h4>{recipe?.additions1[0]}</h4>
          <ul>
            {recipe?.additions1
              .slice(1)
              .map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className={s.itemWrapper}>
          <h4>{recipe?.additions2[0]}</h4>
          <ul>
            {recipe?.additions2
              .slice(1)
              .map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className={s.itemWrapper}>
          <h4>{recipe?.additions3[0]}</h4>
          <ul>
            {recipe?.additions3
              .slice(1)
              .map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className={s.itemWrapper}>
          <h4>Directions</h4>
          <ul>
            {recipe?.directions.map((item, index) => (
              <span key={index}>{item} </span>
            ))}
          </ul>
        </div>
        <div className={s.itemWrapper}>
          <p>Tips: {recipe?.tips}</p>
        </div>
        <Link to={AppRoutes.Recipes}>Back to Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
