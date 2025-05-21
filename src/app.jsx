import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./Layout";
import Produtos from "./Pages/Produtos";
import Estoque from "./Pages/Estoque";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/estoque" element={<Estoque />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
