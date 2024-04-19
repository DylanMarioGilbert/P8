import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Landing404 from "./pages/Landing404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;