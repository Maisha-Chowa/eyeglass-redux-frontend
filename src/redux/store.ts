import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/User/userSlice";
import eyeglassesFilterReducer from "./features/eyeglass/eyeglassSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    eyeglassesFilter: eyeglassesFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
