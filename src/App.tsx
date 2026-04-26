import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { EstrategiaConsultoriaPage } from './pages/EstrategiaConsultoriaPage';
import { MarketingConteudoPage } from './pages/MarketingConteudoPage';
import { IAMarketingPage } from './pages/IAMarketingPage';
import { EventosAtivacoesPage } from './pages/EventosAtivacoes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos/estrategia-e-consultoria" element={<EstrategiaConsultoriaPage />} />
          <Route path="/servicos/marketing-e-conteudo" element={<MarketingConteudoPage />} />
          <Route path="/servicos/ia-aplicada-ao-marketing" element={<IAMarketingPage />} />
          <Route path="/servicos/eventos-e-ativacoes" element={<EventosAtivacoesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
