import { api } from "../../api/apiSlice";

const eyeglassApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEyeGlass: builder.query({
      query: () => "/eyeglass",
    }),
    getSingleEyeGlass: builder.query({
      query: (id) => `eyeglass/${id}`,
    }),
    postEyeGlass: builder.mutation({
      query: ({ data }) => ({
        url: `/eyeglass/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetEyeGlassQuery,
  useGetSingleEyeGlassQuery,
  usePostEyeGlassMutation,
} = eyeglassApi;
