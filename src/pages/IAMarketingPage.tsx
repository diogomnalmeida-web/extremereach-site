import { useEffect } from 'react';
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  UserCheck,
  SlidersHorizontal,
  BarChart3,
  TrendingUp,
  LayoutDashboard,
  Link2,
  Smartphone,
  Gamepad2,
  Wrench,
  Globe,
  MessageCircle,
  Sparkles,
  MonitorPlay,
  Gauge,
} from 'lucide-react';

const automacao = [
  { icon: Zap, label: 'Automação de campanhas de marketing' },
  { icon: Target, label: 'Lead scoring e segmentação inteligente' },
  { icon: UserCheck, label: 'Personalização em tempo real' },
  { icon: SlidersHorizontal, label: 'Otimização de performance (Ads, CRM, funnels)' },
];

const dados = [
  { icon: BarChart3, label: 'Análise de dados e insights acionáveis' },
  { icon: TrendingUp, label: 'Modelos preditivos' },
  { icon: LayoutDashboard, label: 'Dashboards e reporting automatizado' },
  { icon: Link2, label: 'Integração com CRM e plataformas de marketing' },
];

const miniapps = [
  { icon: Smartphone, label: 'Desenvolvimento de miniapps para eventos' },
  { icon: Gamepad2, label: 'Experiências interativas (ativação de marca)' },
  { icon: Wrench, label: 'Ferramentas personalizadas para campanhas' },
  { icon: Globe, label: 'Landing pages dinâmicas com lógica inteligente' },
  { icon: MessageCircle, label: 'Integração com WhatsApp, email e automações' },
];

const casosDeUso = [
  {
    icon: Sparkles,
    title: 'Personalização em tempo real',
    description: 'Campanhas com conteúdo adaptado ao perfil e comportamento de cada utilizador.',
  },
  {
    icon: Gamepad2,
    title: 'Miniapps para eventos',
    description: 'Jogos, votações e experiências interativas que ativam marcas em eventos presenciais e digitais.',
  },
  {
    icon: MonitorPlay,
    title: 'Dashboards em tempo real',
    description: 'Acompanhamento visual e automatizado do desempenho de campanhas e KPIs.',
  },
  {
    icon: Gauge,
    title: 'Otimização de anúncios',
    description: 'IA aplicada à gestão e melhoria contínua de campanhas pagas em múltiplas plataformas.',
  },
];

interface ServiceGroupProps {
  title: string;
  items: { icon: React.ElementType; label: string }[];
}

function ServiceGroup({ title, items }: ServiceGroupProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#c7d410]"></span>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-gray-800 hover:border-[#c7d410]/50 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c7d410]/10 border border-[#c7d410]/20 flex items-center justify-center group-hover:bg-[#c7d410]/20 transition-colors duration-300">
              <item.icon className="w-5 h-5 text-[#c7d410]" />
            </div>
            <p className="text-gray-200 leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IAMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#c7d410] rounded-full filter blur-[160px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#c7d410] rounded-full filter blur-[120px] opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center">
              <Brain className="w-7 h-7 text-[#c7d410]" />
            </div>
            <span className="text-[#c7d410] font-semibold tracking-wide uppercase text-sm">
              IA Aplicada ao Marketing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Tecnologia e IA para criar experiências, automatizar processos e{' '}
            <span className="text-[#c7d410]">escalar resultados</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Desenvolvemos soluções inteligentes — da automação à criação de miniapps — para transformar marketing em performance.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#c7d410]/40">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A IA já não é o futuro — é o presente. Ajudamos marcas a integrar tecnologia de forma prática, com impacto direto na eficiência e nos resultados.
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

          <div className="grid lg:grid-cols-3 gap-10">
            <ServiceGroup title="Automação e otimização" items={automacao} />
            <ServiceGroup title="Dados e inteligência" items={dados} />
            <ServiceGroup title="Soluções e miniapps" items={miniapps} />
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1b1a19] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Casos de <span className="text-[#c7d410]">uso</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {casosDeUso.map((caso, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#1b1a19] border border-gray-800 hover:border-[#c7d410] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center mb-6 group-hover:bg-[#c7d410]/20 group-hover:scale-110 transition-all duration-300">
                  <caso.icon className="w-7 h-7 text-[#c7d410]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{caso.title}</h3>
                <p className="text-gray-400 leading-relaxed">{caso.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#c7d410]/5 rounded-3xl blur-xl"></div>
            <div className="relative p-10 md:p-14 rounded-3xl border border-gray-800 bg-[#1b1a19]">
              <p className="text-2xl md:text-3xl font-semibold leading-snug text-gray-100">
                Não usamos ferramentas.
              </p>
              <div className="w-16 h-1 bg-[#c7d410] mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="text-2xl md:text-3xl font-bold text-[#c7d410]">
                Construímos soluções.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#1b1a19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Brain className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Levar o seu marketing para o{' '}
            <span className="text-[#c7d410]">próximo nível</span> com IA
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra como a inteligência artificial pode transformar a forma como a sua marca comunica, converte e cresce.
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
