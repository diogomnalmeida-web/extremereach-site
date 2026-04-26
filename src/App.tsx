import { ArrowRight, Target, Lightbulb, Brain, Sparkles, TrendingUp } from 'lucide-react';
import { HeroText } from './components/HeroText';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/Logo ExtremeReach white.svg"
            alt="ExtremeReach"
            className="h-8 w-auto"
          />
          <a
            href="#contacto"
            className="px-6 py-2 bg-[#c7d410] text-black font-semibold rounded-full hover:bg-[#b0bd0f] transition-all duration-300"
          >
            Fala connosco
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a19] via-black to-[#1b1a19]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <HeroText />
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Marketing + Inteligência Artificial para impulsionar o alcance da tua marca, maximizar resultados e tornar cada campanha mais inteligente.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c7d410] text-black text-lg font-semibold rounded-full hover:bg-[#b0bd0f] hover:gap-4 transition-all duration-300 animate-fade-in-up"
          >
            Fala connosco
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c7d410] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#c7d410] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre <span className="text-[#c7d410]">Nós</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Na ExtremeReach, ajudamos marcas e organizações a irem mais longe — muito mais longe.
                </p>
                <p>
                  Combinamos estratégia, criatividade e Inteligência Artificial para acelerar resultados, melhorar o desempenho das campanhas e criar experiências de comunicação mais eficazes e personalizadas.
                </p>
                <p>
                  O nosso propósito é simples: conectar marcas às pessoas certas, no momento certo, com a mensagem certa - com precisão, escala e impacto.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#c7d410]/20 to-transparent rounded-3xl border border-[#c7d410]/30 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-[#c7d410] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-24 px-6 bg-[#1b1a19]">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A Nossa <span className="text-[#c7d410]">Missão</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              A nossa missão é ampliar o alcance das marcas através de soluções de marketing inteligente, tecnologia e criatividade aplicada.
            </p>
            <p>
              Acreditamos que o futuro da comunicação está na fusão entre visão estratégica e ferramentas inteligentes que tornam cada interação mais eficiente e relevante.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1b1a19] to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Os Nossos <span className="text-[#c7d410]">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Estratégia e Consultoria',
                description: 'Desenhamos planos de comunicação orientados a objetivos concretos - crescimento, posicionamento, notoriedade ou captação de leads.'
              },
              {
                icon: Lightbulb,
                title: 'Marketing & Conteúdo',
                description: 'Criamos campanhas, storytelling e conteúdos que fortalecem a presença da marca e a ligação com o público.'
              },
              {
                icon: Brain,
                title: 'IA Aplicada ao Marketing',
                description: 'Automação, análise de dados, segmentação inteligente e personalização de experiências em tempo real.'
              },
              {
                icon: Sparkles,
                title: 'Eventos e Ativações',
                description: 'Transformamos marcas em experiências memoráveis, reforçando a presença no mundo físico e digital.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-[#1b1a19] rounded-2xl border border-gray-800 hover:border-[#c7d410] transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="w-12 h-12 text-[#c7d410] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            O Nosso <span className="text-[#c7d410]">Processo</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { number: '01', title: 'Diagnóstico', description: 'Identificamos desafios e oportunidades.' },
              { number: '02', title: 'Estratégia', description: 'Definimos caminhos claros e mensuráveis.' },
              { number: '03', title: 'Implementação', description: 'Produção, campanhas e tecnologia.' },
              { number: '04', title: 'Otimização', description: 'Monitorização contínua + IA aplicada aos resultados.' },
              { number: '05', title: 'Escala', description: 'Expandimos o alcance e maximizamos impacto.' }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-[#1b1a19] rounded-2xl border border-gray-800 hover:border-[#c7d410] transition-all duration-300">
                  <div className="text-5xl font-bold text-[#c7d410]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#c7d410]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#1b1a19]">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-[#c7d410] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Resultados <span className="text-[#c7d410]">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Já colaborámos com empresas, marcas e instituições que procuraram ir além do convencional. Criámos estratégias que reforçaram reputação, aumentaram o alcance e aceleraram crescimento.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-32 px-6 bg-[#1b1a19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c7d410] rounded-full filter blur-[128px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Estás pronto para levar a tua marca <span className="text-[#c7d410]">mais longe?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Vamos construir algo extraordinário. Fala connosco e começa hoje a tua transformação.
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

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/Logo ExtremeReach white.svg"
                alt="ExtremeReach"
                className="h-8 w-auto"
              />
              <p className="text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} ExtremeReach Lda. Marketing + Inteligência Artificial.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-gray-400 text-sm">
              <p>Parque Empresarial da Baía do Tejo</p>
              <p>R. 2, Edifício n.º 23, 2830-138 Barreiro</p>
              <a
                href="https://wa.me/351967370959"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c7d410] hover:text-[#b0bd0f] transition-colors"
              >
                +351 967 370 959
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
