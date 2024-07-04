import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store.ts";
import { BACKEND_API_URL } from "../../consts.ts";

type MileStonesState = {
  mileStones: Record<string, MileStoneType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
};

export type MileStoneType = {
  mileStoneId: number;
  year: number;
  description: string;
};

export const MILESTONES_INITIAL_STATE: MileStonesState = {
  mileStones: {},
  totalCount: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

const mileStonesSlice = createSlice({
  name: "MileStones",
  initialState: MILESTONES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMileStones.fulfilled, (state, { payload }) => {
        const { totalCount, items, totalPages, currentPage, pageSize } =
          payload;
        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalPages = totalPages;
        items.forEach((item) => {
          state.mileStones[item.mileStoneId] = item;
        });
        state.loading = false;
      })
      .addCase(getMileStones.pending, (state) => {
        state.loading = true;
      });
  },
});

export const mileStonesReducer = mileStonesSlice.reducer;

const selectMileStonesState = (state: RootState) => state.mileStones;

export const selectMileStones = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.mileStones,
);

export const selectMileStonesLoading = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.loading,
);

export const selectMileStonesTotalPages = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.totalPages,
);

export const selectMileStonesPageSize = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.pageSize,
);

export const selectMileStonesTotalCount = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.totalCount,
);

export const selectMileStonesCurrentPage = createSelector(
  [selectMileStonesState],
  (mileStonesState) => mileStonesState.currentPage,
);

export const selectMileStonesList = createSelector(
  [selectMileStonesState],
  (mileStonesState) => Object.values(mileStonesState.mileStones),
);

type MileStonesResponseType = {
  items: MileStoneType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export const getMileStones = createAsyncThunk(
  "mileStones/getMileStones",
  async (query?: string | null) => {
    const { data } = await axios<MileStonesResponseType>({
      url: `${BACKEND_API_URL}/MileStones${query ? query : ""}`,
    });
    return data;
  },
);
