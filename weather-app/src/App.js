
import "./App.css";
import ShowCity from "./components/ShowCity";
import Provider from "./context/City";

function App() {
  return (
    <div className="App">
    <Provider>
      <ShowCity />
    </Provider>
  </div>

  );
}

export default App;
