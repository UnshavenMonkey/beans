import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes.ts";
import BeanCard from "../../pages/beans-page/bean-card/bean-card.tsx";
import RecipeCard from "../../pages/recipes-page/recipe-card/recipe-card.tsx";

const MainPage = lazy(() => import("../../pages/main-page/main-page.tsx"));
const BeansPage = lazy(() => import("../../pages/beans-page/beans-page.tsx"));
const FactsPage = lazy(() => import("../../pages/facts-page/facts-page.tsx"));
const RecipesPage = lazy(
  () => import("../../pages/recipes-page/recipes-page.tsx"),
);
const CombinationsPage = lazy(
  () => import("../../pages/combinations-page/combinations-page.tsx"),
);
const HistoryPage = lazy(
  () => import("../../pages/history-page/history-page.tsx"),
);
const AboutSection = lazy(() => import("../about-section/about-section.tsx"));

const AppContent = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={AppRoutes.Index} element={<MainPage />} />
        <Route path={AppRoutes.Beans} element={<BeansPage />} />
        <Route path={AppRoutes.Facts} element={<FactsPage />} />
        <Route path={AppRoutes.Recipes} element={<RecipesPage />} />
        <Route path={AppRoutes.Combinations} element={<CombinationsPage />} />
        <Route path={AppRoutes.History} element={<HistoryPage />} />
        <Route path={AppRoutes.Bean} element={<BeanCard />} />
        <Route path={AppRoutes.Recipe} element={<RecipeCard />} />
        <Route path={AppRoutes.About} element={<AboutSection />} />
      </Routes>
    </Suspense>
  );
};

export default AppContent;
