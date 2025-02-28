import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
