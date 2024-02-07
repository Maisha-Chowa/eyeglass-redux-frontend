import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
    }),

    postNewUser: builder.mutation({
      query: ({ data }) => ({
        url: "user/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  usePostNewUserMutation,
  useGetUsersQuery,
  // useGetBooksQuery,
  // useSingleBookQuery,
  // useGetReviewQuery,
  // usePostReviewMutation,
  // usePostNewBookMutation,
} = userApi;
