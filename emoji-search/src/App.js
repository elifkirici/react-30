import "./App.css";
import Provider from "./context/contextInput";
import Search from "./components/Header/Search";
import List from "./components/EmojiList/List";
function App() {
  return (
    <div className="container">
      <Provider>
        <Search />
        <List />
      </Provider>
    </div>
  );
}

export default App;
