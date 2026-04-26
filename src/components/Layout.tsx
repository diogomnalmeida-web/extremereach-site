import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const footerServices = [
  { label: 'Estratégia e Consultoria', href: '/servicos/estrategia-e-consultoria' },
  { label: 'Marketing & Conteúdo', href: '/servicos/marketing-e-conteudo' },
  { label: 'IA Aplicada ao Marketing', href: '/servicos/ia-aplicada-ao-marketing' },
  { label: 'Eventos e Ativações', href: '/servicos/eventos-e-ativacoes' },
];

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <nav aria-label="Navegação principal" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link
                to="/"
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Voltar</span>
              </Link>
            )}
            <Link to="/">
              <img
                src="/Logo ExtremeReach white.svg"
                alt="Extreme Reach - Página inicial"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <a
            href={isHome ? '#contacto' : 'https://wa.me/351967370959'}
            target={isHome ? undefined : '_blank'}
            rel={isHome ? undefined : 'noopener noreferrer'}
            className="px-6 py-2 bg-[#c7d410] text-black font-semibold rounded-full hover:bg-[#b0bd0f] transition-all duration-300"
          >
            Fala connosco
          </a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/">
                <img
                  src="/Logo ExtremeReach white.svg"
                  alt="Extreme Reach"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-500 text-center md:text-left">
                &copy; {new Date().getFullYear()} ExtremeReach Lda.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Serviços</p>
              <nav aria-label="Serviços">
                <ul className="flex flex-col gap-2">
                  {footerServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        to={service.href}
                        className="text-gray-400 text-sm hover:text-[#c7d410] transition-colors duration-200"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-sm">
              <address className="not-italic flex flex-col items-center md:items-end gap-2 text-gray-400">
                <p>Parque Empresarial da Baía do Tejo</p>
                <p>R. 2, Edifício n.º 23, 2830-138 Barreiro</p>
                <a
                  href="mailto:geral@extremereach.pt"
                  className="text-[#c7d410] hover:text-[#b0bd0f] transition-colors"
                >
                  geral@extremereach.pt
                </a>
                <a
                  href="https://wa.me/351967370959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c7d410] hover:text-[#b0bd0f] transition-colors"
                >
                  +351 967 370 959
                </a>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
