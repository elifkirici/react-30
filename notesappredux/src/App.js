import "./App.css";
import AddNotes from "./components/AddNote/AddNote";
import NotesList from "./components/Notes/NotesList";
import Provider from "./context/DarkModeContext";

function App() {

  return (
    <div className="App"> 
      <Provider>
        <AddNotes />
        <NotesList />
      </Provider>
      </div>
  );
}

export default App;
