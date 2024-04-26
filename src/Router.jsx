import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Landing404 from "./pages/Landing404";
import ApartmentPage from "./pages/ApartmentPage";
import About from "./pages/About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/flat/:id" element={<ApartmentPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;