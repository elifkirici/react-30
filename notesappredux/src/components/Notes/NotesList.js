import { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../Header/Search";
import { useSelector } from "react-redux";
import { removenote } from "../../redux/notes/notesSlice";
import {useMode} from '../../context/DarkModeContext'

function NotesList() {
  const [searchinput, setSearchInput] = useState("");
  const {mode} =useMode()

  const notes = useSelector((state) => state.notes.notes);
  const searchList = notes.filter((note) => note.title.includes(searchinput));
  const dispatch = useDispatch();

  return (
    <div className="List">
      <Search setSearchInput={setSearchInput} searchinput={searchinput} />
      <div className="noteList">
        {searchList.map((note, index) => (
          <div
            className="card d-flex"
            style={{
              backgroundColor:
                note.color === "pink"
                  ? "#eca1a6"
                  : note.color === "yellow"
                  ? "#ffcc5c"
                  : note.color === "green"
                  ? "#82b74b"
                  : "#a2b9bc",
            }}
            key={index}
          >
            <div className="card-body">
              <h5 className="card-title border border-dark p-2 mb-2 border-opacity-50">{note.title}</h5>

              <p className="card-text">{note.note}.</p>
              <button
                className={mode==='dark'? 'btn btn-light' :'btn btn-dark'}
                onClick={() => dispatch(removenote(note.id))}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
