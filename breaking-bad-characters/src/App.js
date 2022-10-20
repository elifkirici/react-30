import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import List from "./pages/List";
import Character from "./pages/Character";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/List" element={<List />} />
        <Route path="/Character/:index" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
