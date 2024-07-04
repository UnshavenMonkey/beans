import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store.ts";
import { BACKEND_API_URL } from "../../consts.ts";

type CombinationsState = {
  combinations: Record<string, CombinationsType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
};

export type CombinationsType = {
  combinationId: number;
  name: string;
  tag: string[];
};

export const COMBINATIONS_INITIAL_STATE: CombinationsState = {
  combinations: {},
  totalCount: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

const recipesSlice = createSlice({
  name: "combinations",
  initialState: COMBINATIONS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCombinations.fulfilled, (state, { payload }) => {
        const { totalCount, items, totalPages, currentPage, pageSize } =
          payload;
        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalPages = totalPages;
        items.forEach((item) => {
          state.combinations[item.combinationId] = item;
        });
        state.loading = false;
      })
      .addCase(getCombinations.pending, (state) => {
        state.loading = true;
      });
  },
});

export const combinationsReducer = recipesSlice.reducer;

const selectCombinationsState = (state: RootState) => state.combinations;

export const selectCombinations = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.combinations,
);

export const selectCombinationsLoading = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.loading,
);

export const selectCombinationsTotalPages = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.totalPages,
);

export const selectCombinationsPageSize = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.pageSize,
);

export const selectCombinationsTotalCount = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.totalCount,
);

export const selectCombinationsCurrentPage = createSelector(
  [selectCombinationsState],
  (combinationsState) => combinationsState.currentPage,
);

export const selectCombinationsList = createSelector(
  [selectCombinationsState],
  (combinationsState) => Object.values(combinationsState.combinations),
);

type CombinationsResponseType = {
  items: CombinationsType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export const getCombinations = createAsyncThunk(
  "combinations/getCombinations",
  async (query?: string | null) => {
    const { data } = await axios<CombinationsResponseType>({
      url: `${BACKEND_API_URL}/Combinations${query ? query : ""}`,
    });
    return data;
  },
);
