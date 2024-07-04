import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { beansReducer } from "./pages/beans-page/beans-page-slice.ts";
import { factsReducer } from "./pages/facts-page/facts-page-slice.ts";
import { recipesReducer } from "./pages/recipes-page/recipes-page-slice.ts";
import { combinationsReducer } from "./pages/combinations-page/combinations-page-slice.ts";
import { mileStonesReducer } from "./pages/history-page/history-page-slice.ts";

export const createAppReducer = () =>
  combineReducers({
    beans: beansReducer,
    facts: factsReducer,
    recipes: recipesReducer,
    combinations: combinationsReducer,
    mileStones: mileStonesReducer,
  });

const reducer = createAppReducer();
export type RootState = ReturnType<typeof reducer>;

export const createAppStore = () =>
  configureStore({
    reducer,
  });

export type AppDispatch = ReturnType<typeof createAppStore>["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  AnyAction
>;
