import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  data: [],
};

const petSlice = createSlice({
  name: "jiraLocal",
  initialState,
  reducers: {},
});

export const {} = petSlice.actions;
export default petSlice.reducer;
