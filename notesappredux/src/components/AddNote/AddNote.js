import { useDispatch } from "react-redux";
import { addnote } from "../../redux/notes/notesSlice";
import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useMode } from "../../context/DarkModeContext";

function AddNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const { mode } = useMode();

  useEffect(() => {
    document.getElementById("body").className =
      mode === "dark" ? "darkBody" : "body";
  }, [mode]);

  useEffect(() => {
    localStorage.getItem("list");
  }, []);

  const noteADD = () => {
    if (title !== "" && note !== "" && color !== "") {
      dispatch(addnote({ title, note, color, id: nanoid() }));
      setTitle("");
      setNote("");
    }
  };

  return (
    <div className={mode === "dark" ? "darkAddNote" : "AddNote"}>
      <h2>Add to Note</h2>
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      />
      <label>Note</label>

      <textarea
        name="note"
        id="name"
        value={note}
        cols="30"
        rows="10"
        placeholder="note.."
        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></textarea>
      <h4>Color:</h4>
      <div
        className="colorBtn"
        onClick={(e) => {
          setColor(e.target.className);
        }}
      >
        <button className="pink"></button>
        <button className="blue"></button>
        <button className="yellow"></button>
        <button className="green"></button>
      </div>
      <div className="addBtn mb-5">
        <button
          className={mode === "dark" ? "btn btn-light" : "btn btn-dark"}
          onClick={noteADD}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddNote;
