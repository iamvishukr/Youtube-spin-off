import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSllice from "./chatSllice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat:  chatSllice,
    }
});

export default store;