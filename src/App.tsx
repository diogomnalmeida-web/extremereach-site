import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { EstrategiaConsultoriaPage } from './pages/EstrategiaConsultoriaPage';
import { MarketingConteudoPage } from './pages/MarketingConteudoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos/estrategia-e-consultoria" element={<EstrategiaConsultoriaPage />} />
          <Route path="/servicos/marketing-e-conteudo" element={<MarketingConteudoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
