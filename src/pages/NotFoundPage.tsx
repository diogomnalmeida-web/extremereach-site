import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Extreme Reach</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="text-8xl md:text-9xl font-bold text-[#c7d410]/20 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            A página que procura não existe ou foi movida. Volte à página inicial para continuar a explorar.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c7d410] text-black text-lg font-semibold rounded-full hover:bg-[#b0bd0f] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao início
          </Link>
        </div>
      </section>
    </>
  );
}
