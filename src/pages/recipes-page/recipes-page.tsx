import { useAppDispatch, useAppSelector } from "../../store.ts";
import { useEffect } from "react";
import firstItem from "../../assets/images/facts-first-item.png";
import {
  getRecipes,
  selectRecipesList,
  selectRecipesLoading,
  selectRecipesTotalCount,
} from "./recipes-page-slice.ts";
import RecipesCard from "./recipes-card/recipes-card.tsx";
import s from "../facts-page/facts-page.module.scss";

const RecipesPage = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectRecipesTotalCount);
  const recipesList = useAppSelector(selectRecipesList);
  const loading = useAppSelector(selectRecipesLoading);

  useEffect(() => {
    const query = totalItems ? `?pageSize=${totalItems}` : null;
    dispatch(getRecipes(query));
  }, [dispatch, totalItems]);

  if (loading)
    return (
      <div className={s.factsPageWrapper}>
        <div className={s.beansLoading}>Loading...</div>
      </div>
    );

  return (
    <div className={s.factsPageWrapper}>
      <div className={s.factsPageContainer}>
        <h3>Explore Recipes ...</h3>
      </div>
      <div className={s.factsGrid}>
        <img src={firstItem} alt="happy-bean" />
        {recipesList.map((item, index) => (
          <RecipesCard recipe={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
