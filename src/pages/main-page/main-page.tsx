import WelcomeSection from "../../components/welcome-section/welcome-section.tsx";
import AboutSection from "../../components/about-section/about-section.tsx";
import HistorySection from "../../components/history-section/history-section.tsx";
import BeansSection from "../../components/beans-section/beans-section.tsx";
import { getBeans, selectBeansList } from "../beans-page/beans-page-slice.ts";
import { useAppDispatch, useAppSelector } from "../../store.ts";
import { useEffect } from "react";
import FactsSection from "../../components/facts-section/facts-section.tsx";
import { getFacts, selectFactsList } from "../facts-page/facts-page-slice.ts";
import MoreSection from "../../components/more-section/more-section.tsx";
import {
  getRecipes,
  selectRecipesList,
} from "../recipes-page/recipes-page-slice.ts";
import {
  getCombinations,
  selectCombinationsList,
} from "../combinations-page/combinations-page-slice.ts";

const MainPage = () => {
  const beans = useAppSelector(selectBeansList);
  const facts = useAppSelector(selectFactsList);
  const recipes = useAppSelector(selectRecipesList);
  const combinations = useAppSelector(selectCombinationsList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBeans());
    dispatch(getFacts());
    dispatch(getRecipes());
    dispatch(getCombinations());
  }, []);
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <HistorySection />
      <BeansSection beans={beans.slice(0, 6)} />
      <FactsSection facts={facts.slice(0, 9)} />
      <MoreSection recipe={recipes[0]} combination={combinations[0]} />
    </>
  );
};

export default MainPage;
