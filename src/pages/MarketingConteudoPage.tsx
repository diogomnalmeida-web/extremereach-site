import { useEffect } from 'react';
import {
  ArrowRight,
  Lightbulb,
  Share2,
  Video,
  Megaphone,
  BookOpen,
  Mail,
  MousePointerClick,
  TrendingUp,
  Users,
  UserCheck,
  BarChart3,
} from 'lucide-react';

const services = [
  { icon: Share2, label: 'Gestão de redes sociais' },
  { icon: Video, label: 'Produção de conteúdos (vídeo, foto, copy)' },
  { icon: Megaphone, label: 'Campanhas digitais (Meta, Google, TikTok)' },
  { icon: BookOpen, label: 'Storytelling de marca' },
  { icon: Mail, label: 'Email marketing e automações' },
  { icon: MousePointerClick, label: 'Landing pages e funis de conversão' },
];

const impacts = [
  { icon: TrendingUp, label: 'Aumento de engagement' },
  { icon: Users, label: 'Crescimento de comunidade' },
  { icon: UserCheck, label: 'Geração de leads qualificados' },
  { icon: BarChart3, label: 'Melhoria de conversões' },
];

export function MarketingConteudoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#c7d410] rounded-full filter blur-[160px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-[#c7d410]" />
            </div>
            <span className="text-[#c7d410] font-semibold tracking-wide uppercase text-sm">
              Marketing & Conteúdo
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Conteúdo que capta atenção.{' '}
            <span className="text-[#c7d410]">Estratégia que gera impacto.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Criamos narrativas e campanhas que ligam marcas a pessoas — e transformam essa ligação em resultados.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#c7d410]/40">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Hoje, o conteúdo é o principal ponto de contacto entre marcas e audiências. Nós ajudamos a garantir que esse contacto é relevante, consistente e memorável.
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
                <div className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-[#c7d410]/10 border border-[#c7d410]/20 flex items-center justify-center group-hover:bg-[#c7d410]/20 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[#c7d410]" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1b1a19] to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            A nossa <span className="text-[#c7d410]">abordagem</span>
          </h2>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#c7d410]/5 rounded-3xl blur-xl"></div>
            <div className="relative p-10 md:p-14 rounded-3xl border border-gray-800 bg-[#1b1a19]">
              <p className="text-2xl md:text-3xl font-semibold leading-snug text-gray-100">
                Conteúdo sem estratégia é <span className="text-gray-500">ruído</span>.
              </p>
              <p className="text-2xl md:text-3xl font-semibold leading-snug text-gray-100 mt-2">
                Estratégia sem conteúdo <span className="text-gray-500">não existe</span>.
              </p>
              <div className="w-16 h-1 bg-[#c7d410] mx-auto mt-8 mb-4 rounded-full"></div>
              <p className="text-xl text-[#c7d410] font-semibold">
                Nós juntamos os dois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos de impacto */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Exemplos de <span className="text-[#c7d410]">impacto</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-[#1b1a19] border border-gray-800 hover:border-[#c7d410] transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c7d410]/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#c7d410]" />
                </div>
                <p className="text-lg font-semibold text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#1b1a19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Lightbulb className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Criar conteúdo que realmente{' '}
            <span className="text-[#c7d410]">funciona</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vamos construir uma presença digital que gera resultados reais para a sua marca.
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
