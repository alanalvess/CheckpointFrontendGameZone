import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Jogos from "../pages/Jogos";
import JogoDetalhe from "../pages/JogoDetalhe";
import Consoles from "../pages/Consoles";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";
import Carrinho from "../pages/Carrinho";


import Header from "../components/Header";
import Footer from "../components/Footer";


const RouteList = () => (
  <BrowserRouter>

    <header>
      <Header />
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/:id" element={<JogoDetalhe />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

    <footer>
      <Footer />
    </footer>

  </BrowserRouter>
);

export default RouteList;
