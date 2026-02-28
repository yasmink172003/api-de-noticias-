// Importa componentes do React Router
// BrowserRouter → envoltório que permite navegação usando URLs
// Routes → agrupa todas as rotas
// Route → define cada rota individual
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import AdminNews from "./pages/AdminNews";
import AdminUsers from "./pages/AdminUsers";

// Componente principal da aplicação
function App() {
  return (
    // BrowserRouter envolve toda a aplicação
    // Ele habilita a navegação por URL sem recarregar a página
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;