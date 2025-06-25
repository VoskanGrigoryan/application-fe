import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./features/pet/petSlice";
import { locationApi } from "./features/location/locationSlice";

export const store = configureStore({
  reducer: {
    pet: petReducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
