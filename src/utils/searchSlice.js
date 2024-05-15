import { createSlice } from "@reduxjs/toolkit";

//whole concept for creating this slice is to store the cache of the search 
//so that it can be used for reduction of unnecessary Api calls

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
