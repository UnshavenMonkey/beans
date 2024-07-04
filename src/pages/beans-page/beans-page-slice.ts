import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store.ts";
import { BACKEND_API_URL } from "../../consts.ts";

type BeansState = {
  beans: Record<string, BeanType>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
};

export type BeanType = {
  beanId: number;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
};

export const BEANS_INITIAL_STATE: BeansState = {
  beans: {},
  totalCount: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

const beansSlice = createSlice({
  name: "beans",
  initialState: BEANS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBeans.fulfilled, (state, { payload }) => {
        const { totalCount, items, totalPages, currentPage, pageSize } =
          payload;
        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalPages = totalPages;
        items.forEach((item) => {
          state.beans[item.beanId] = item;
        });
        state.loading = false;
      })
      .addCase(getBeans.pending, (state) => {
        state.loading = true;
      });
  },
});

export const beansReducer = beansSlice.reducer;

const selectBeansState = (state: RootState) => state.beans;

export const selectBeans = createSelector(
  [selectBeansState],
  (beansState) => beansState.beans,
);

export const selectBeansTotalPages = createSelector(
  [selectBeansState],
  (beansState) => beansState.totalPages,
);

export const selectBeansPageSize = createSelector(
  [selectBeansState],
  (beansState) => beansState.pageSize,
);

export const selectBeansTotalCount = createSelector(
  [selectBeansState],
  (beansState) => beansState.totalCount,
);

export const selectBeansCurrentPage = createSelector(
  [selectBeansState],
  (beansState) => beansState.currentPage,
);

export const selectBeansList = createSelector(
  [selectBeansState],
  (beansState) => Object.values(beansState.beans),
);

export const selectBeansLoading = createSelector(
  [selectBeansState],
  (beansState) => beansState.loading,
);

type BeansResponseType = {
  items: BeanType[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export const getBeans = createAsyncThunk(
  "beans/getBeans",
  async (query?: string | null) => {
    const { data } = await axios<BeansResponseType>({
      url: `${BACKEND_API_URL}/Beans${query ? query : ""}`,
    });
    return data;
  },
);

export const getBean = createAsyncThunk(
  "beans/getBean",
  async (id: string | null) => {
    const { data } = await axios<BeanType>({
      url: `${BACKEND_API_URL}/Beans/${id}`,
    });
    return data;
  },
);
