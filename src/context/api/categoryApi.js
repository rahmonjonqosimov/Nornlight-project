import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategoty: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Product"],
    }),

    createCategory: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetCategotyQuery, useCreateCategoryMutation } = productApi;
