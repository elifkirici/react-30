import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      { title: "note1", note: "elif", color: "pink", id: 1 },
      { title: "note2", note: "ahmet", color: "blue", id: 2 },
    ],
  },
  reducers: {
    addnote: (state, action) => {
      state.notes.push(action.payload);
    },
    removenote: (state, action) => {
      const removeFilter = state.notes.filter(
        (item) => item.id !== action.payload
      );
      state.notes = removeFilter;
    },
  },
});
export const { addnote, removenote } = notesSlice.actions;
export default notesSlice.reducer;
