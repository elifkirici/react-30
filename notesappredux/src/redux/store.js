import { configureStore } from "@reduxjs/toolkit";

import notesSlice from "./notes/notesSlice";
export default configureStore({
  reducer: {
    notes: notesSlice,
  },
});
