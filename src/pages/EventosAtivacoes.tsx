import { useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Flag,
  Eye,
  Rocket,
  Building2,
  Share2,
  MessageSquareQuote,
  Zap,
} from 'lucide-react';

const services = [
  { icon: CalendarCheck, label: 'Produção de eventos' },
  { icon: Flag, label: 'Ativações de marca' },
  { icon: Eye, label: 'Experiências imersivas' },
  { icon: Rocket, label: 'Lançamentos de produto' },
  { icon: Building2, label: 'Eventos corporativos' },
  { icon: Share2, label: 'Integração digital (social, conteúdo, live)' },
];

export function EventosAtivacoesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#c7d410] rounded-full filter blur-[160px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#c7d410]" />
            </div>
            <span className="text-[#c7d410] font-semibold tracking-wide uppercase text-sm">
              Eventos e Ativações
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Criamos experiências que ficam{' '}
            <span className="text-[#c7d410]">na memória</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Ligamos marcas a pessoas através de eventos e ativações que geram impacto real.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#c7d410]/40">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Num mundo digital, as experiências físicas continuam a ser das mais poderosas formas de criar ligação emocional com uma marca. Nós desenhamos e executamos momentos que fazem essa ligação acontecer.
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            A nossa <span className="text-[#c7d410]">abordagem</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl bg-[#1b1a19] border border-gray-800 hover:border-[#c7d410] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center mb-6 group-hover:bg-[#c7d410]/20 transition-colors duration-300">
                <MessageSquareQuote className="w-7 h-7 text-[#c7d410]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Pensado ao detalhe</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Cada evento é uma extensão da marca — pensado ao detalhe, com criatividade e foco na experiência do público.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#1b1a19] border border-gray-800 hover:border-[#c7d410] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-[#c7d410]/10 border border-[#c7d410]/30 flex items-center justify-center mb-6 group-hover:bg-[#c7d410]/20 transition-colors duration-300">
                <Zap className="w-7 h-7 text-[#c7d410]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Impacto duradouro</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Não fazemos apenas eventos — criamos momentos que geram conteúdo, buzz e impacto duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Criar uma experiência memorável para a sua{' '}
            <span className="text-[#c7d410]">marca</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vamos transformar a sua próxima ação num momento que ninguém esquece.
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
