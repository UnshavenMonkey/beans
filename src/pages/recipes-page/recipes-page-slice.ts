import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store.ts";
import { BACKEND_API_URL } from "../../consts.ts";

type RecipesState = {
  recipes: Record<string, RecipesType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
};

export type RecipesType = {
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
  imageUrl: string;
  ingredients: string[];
  additions1: string[];
  additions2: string[];
  additions3: string[];
  directions: string[];
  tips: string[];
};

export const RECIPES_INITIAL_STATE: RecipesState = {
  recipes: {},
  totalCount: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: RECIPES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.fulfilled, (state, { payload }) => {
        const { totalCount, items, totalPages, currentPage, pageSize } =
          payload;
        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalPages = totalPages;
        items.forEach((item) => {
          state.recipes[item.recipeId] = item;
        });
        state.loading = false;
      })
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

const selectRecipesState = (state: RootState) => state.recipes;

export const selectRecipes = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.recipes,
);

export const selectRecipesLoading = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.loading,
);

export const selectRecipesTotalPages = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.totalPages,
);

export const selectRecipesPageSize = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.pageSize,
);

export const selectRecipesTotalCount = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.totalCount,
);

export const selectRecipesCurrentPage = createSelector(
  [selectRecipesState],
  (recipesState) => recipesState.currentPage,
);

export const selectRecipesList = createSelector(
  [selectRecipesState],
  (recipesState) => Object.values(recipesState.recipes),
);

type RecipesResponseType = {
  items: RecipesType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (query?: string | null) => {
    const { data } = await axios<RecipesResponseType>({
      url: `${BACKEND_API_URL}/Recipes${query ? query : ""}`,
    });
    return data;
  },
);

export const getRecipe = createAsyncThunk(
  "recipes/getRecipe",
  async (id: string | null) => {
    const { data } = await axios<RecipesType>({
      url: `${BACKEND_API_URL}/Recipes/${id}`,
    });
    return data;
  },
);
