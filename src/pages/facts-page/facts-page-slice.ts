import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store.ts";
import { BACKEND_API_URL } from "../../consts.ts";

type FactsState = {
  facts: Record<string, FactType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
};

export type FactType = {
  factId: number;
  title: string;
  description: string;
};

export const FACTS_INITIAL_STATE: FactsState = {
  facts: {},
  totalCount: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

const factsSlice = createSlice({
  name: "facts",
  initialState: FACTS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFacts.fulfilled, (state, { payload }) => {
        const { totalCount, items, totalPages, currentPage, pageSize } =
          payload;
        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalPages = totalPages;
        items.forEach((item) => {
          state.facts[item.factId] = item;
        });
        state.loading = false;
      })
      .addCase(getFacts.pending, (state) => {
        state.loading = true;
      });
  },
});

export const factsReducer = factsSlice.reducer;

const selectFactsState = (state: RootState) => state.facts;

export const selectFacts = createSelector(
  [selectFactsState],
  (factsState) => factsState.facts,
);

export const selectFactsLoading = createSelector(
  [selectFactsState],
  (factsState) => factsState.loading,
);

export const selectFactsTotalPages = createSelector(
  [selectFactsState],
  (factsState) => factsState.totalPages,
);

export const selectFactsPageSize = createSelector(
  [selectFactsState],
  (factsState) => factsState.pageSize,
);

export const selectFactsTotalCount = createSelector(
  [selectFactsState],
  (factsState) => factsState.totalCount,
);

export const selectFactsCurrentPage = createSelector(
  [selectFactsState],
  (factsState) => factsState.currentPage,
);

export const selectFactsList = createSelector(
  [selectFactsState],
  (factsState) => Object.values(factsState.facts),
);

type FactsResponseType = {
  items: FactType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export const getFacts = createAsyncThunk(
  "facts/getFacts",
  async (query?: string | null) => {
    const { data } = await axios<FactsResponseType>({
      url: `${BACKEND_API_URL}/Facts${query ? query : ""}`,
    });
    return data;
  },
);
