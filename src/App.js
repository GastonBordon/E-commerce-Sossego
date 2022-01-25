import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/detalle" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
