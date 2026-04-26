import { useEffect } from 'react';
import { ArrowRight, Target, Search, Crosshair, PenTool, Route, CheckCircle2 } from 'lucide-react';

const services = [
  'Definição de estratégia de marketing e comunicação',
  'Posicionamento de marca',
  'Planeamento de campanhas',
  'Estratégias de aquisição e retenção',
  'Análise de mercado e concorrência',
  'Definição de KPIs e métricas de sucesso',
];

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico profundo da marca',
    description:
      'Analisamos o posicionamento atual, o mercado, a concorrência e as oportunidades de crescimento para construir uma base sólida.',
  },
  {
    number: '02',
    icon: Crosshair,
    title: 'Definição de objetivos claros',
    description:
      'Estabelecemos metas mensuráveis e alinhadas com a visão do negócio, garantindo foco e direção em cada ação.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Construção da estratégia',
    description:
      'Desenvolvemos o plano estratégico com canais, mensagens, audiências e táticas definidas para máximo impacto.',
  },
  {
    number: '04',
    icon: Route,
    title: 'Roadmap de implementação',
    description:
      'Criamos um plano de ação faseado com prioridades, prazos e responsabilidades para execução eficiente.',
  },
];

export function EstrategiaConsultoriaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#c7d410] rounded-full filter blur-[160px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center">
              <Target className="w-7 h-7 text-[#c7d410]" />
            </div>
            <span className="text-[#c7d410] font-semibold tracking-wide uppercase text-sm">
              Estratégia e Consultoria
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transformamos objetivos em estratégias que{' '}
            <span className="text-[#c7d410]">geram resultados</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Mais do que ideias, criamos planos acionáveis que fazem a sua marca crescer com direção e consistência.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#c7d410]/40">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Num mercado saturado de comunicação, não basta estar presente — é preciso saber onde, como e porquê. Ajudamos marcas a tomar decisões estratégicas sustentadas em dados, criatividade e visão de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-24 px-6 bg-[#1b1a19]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            O que <span className="text-[#c7d410]">fazemos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#c7d410]/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#c7d410] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1b1a19] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Como <span className="text-[#c7d410]">trabalhamos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#1b1a19] border border-gray-800 hover:border-[#c7d410] transition-all duration-500"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-[#c7d410]/10 group-hover:text-[#c7d410]/20 transition-colors duration-500">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center mb-6 group-hover:bg-[#c7d410]/20 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-[#c7d410]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Vamos desenhar a estratégia certa para a sua{' '}
            <span className="text-[#c7d410]">marca</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar os seus objetivos em resultados concretos e mensuráveis.
          </p>
          <a
            href="https://wa.me/351967370959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#c7d410] text-black text-xl font-semibold rounded-full hover:bg-[#b0bd0f] hover:gap-4 transition-all duration-300"
          >
            Fala connosco
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
}
