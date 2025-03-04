import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
  },
  reducers: {
    addVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { addVideoList } = videoSlice.actions;
export default videoSlice.reducer;
