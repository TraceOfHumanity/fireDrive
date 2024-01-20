import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./features/themeSlice";
import userSlice from "./features/user";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
  },
});
