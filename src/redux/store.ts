import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./features/pet/petSlice";
import { locationApi } from "./features/location/locationApi";
import { authApi } from "./features/auth/authApi";

export const store = configureStore({
  reducer: {
    pet: petReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
