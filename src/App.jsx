import React, { useState, useRef } from 'react';
import { Home, Key, CheckCircle, Award, TrendingUp, ShieldCheck, MessageCircle, Volume2, VolumeX } from 'lucide-react';

const openWhatsApp = (url) => {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.fbq === 'function') window.fbq('track', 'Contact');
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead');
      window.open(url, '_blank');
    }
  } catch (err) {
    if (typeof window !== 'undefined') window.open(url, '_blank');
  }
};

const App = () => {
  const whatsappSell = "https://wa.me/351910219883?text=Ol%C3%A1%20Alberto,%20vi%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20ajuda%20para%20vender%20o%20meu%20im%C3%B3vel.";
  const whatsappBuy = "https://wa.me/351910219883?text=Ol%C3%A1%20Alberto,%20estou%20%C3%A0%20procura%20de%20casa%20para%20comprar%20no%20Porto.";
  const whatsappGeneral = "https://wa.me/351910219883?text=Ol%C3%A1%20Alberto,%20visitei%20a%20sua%20p%C3%A1gina%20e%20gostaria%20de%20falar%20consigo.";

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#e60000] selection:text-white overflow-x-hidden relative">

      {/* 1. Hero Section */}
      <section className="relative bg-navy text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
          <img
            src="/alberto-hero.jpeg"
            alt="Alberto Ferreira Consultor"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#e60000]" />
              <span className="text-sm font-medium tracking-wide text-gray-200">Consultor Premium Top Performer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Eu não testo o mercado, <br className="hidden lg:block" /> eu apresento <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e60000]">resultados reais</span>.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Com mais de 500 imóveis vendidos no Norte do país, garanto um processo seguro,
              rápido e ao melhor valor. Quer pretenda vender ou comprar, o meu método faz a diferença.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => openWhatsApp(whatsappSell)}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e60000] text-white font-semibold rounded-lg overflow-hidden transition-all hover:bg-red-700 hover:shadow-lg focus:outline-none"
              >
                <span>Quero Vender o Meu Imóvel</span>
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={() => openWhatsApp(whatsappBuy)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg transition-all hover:bg-white/10 hover:border-white focus:outline-none"
              >
                <span>Quero Comprar Casa</span>
                <Key className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-end relative mt-12 md:mt-0">
            <div className="relative w-72 h-96 lg:w-96 lg:h-[32rem]">
              <div className="absolute inset-0 bg-[#e60000] rounded-2xl transform translate-x-4 translate-y-4 opacity-50 blur-sm mix-blend-multiply"></div>
              <img
                src="/alberto-hero.jpeg"
                alt="Alberto Ferreira"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="bg-white border-b border-gray-100 relative z-30 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-8 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div className="flex flex-col items-center justify-center p-4">
          <TrendingUp className="w-8 h-8 text-[#e60000] mb-3" />
          <h3 className="text-4xl font-bold text-navy">13+ Anos</h3>
          <p className="text-gray-500 font-medium mt-1">de Experiência</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Home className="w-8 h-8 text-[#e60000] mb-3" />
          <h3 className="text-4xl font-bold text-navy">500+</h3>
          <p className="text-gray-500 font-medium mt-1">Imóveis Vendidos</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <ShieldCheck className="w-8 h-8 text-[#e60000] mb-3" />
          <h3 className="text-4xl font-bold text-navy">100%</h3>
          <p className="text-gray-500 font-medium mt-1">Dedicação & Transparência</p>
        </div>
      </section>

      {/* 2. Video Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-navy to-[#e60000] opacity-10 blur-2xl rounded-full"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black border-8 border-white w-[300px] sm:w-[340px] aspect-[9/16]">
                <video
                  ref={videoRef}
                  src="/alberto-reels.mov"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all flex items-center gap-2 z-10"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#e60000]" />}
                  <span className="text-sm font-medium pr-1">{isMuted ? 'Ligar Som' : 'Desligar Som'}</span>
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-100 text-[#e60000]">
                <span className="text-sm font-semibold tracking-wide">O Meu Método</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight">
                A diferença entre <span className="text-gray-400 line-through decoration-[#e60000] decoration-4 opacity-80">tentar vender</span> <br /> e vender de verdade.
              </h2>
              <div className="w-20 h-1.5 bg-[#e60000] rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                O segredo está nos detalhes e nas noites de negociação. Não sou apenas um consultor,
                sou o parceiro que defende os seus interesses. A exposição certa com as ferramentas certas
                garantem que o seu imóvel chega a quem verdadeiramente o valoriza.
              </p>

              <ul className="space-y-4 pt-4">
                {['Presença digital forte e estratégica', 'Acompanhamento em todas as fases do processo', 'Acesso a uma vasta rede de potenciais compradores'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-[#e60000] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-24 bg-navy relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Como o posso ajudar?</h2>
            <p className="text-gray-400 text-lg">Soluções feitas à medida dos seus objetivos imobiliários no Norte.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border-t-4 border-[#e60000]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-[#e60000]">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Para quem Vende</h3>
              <p className="text-gray-600 mb-8 flex-grow text-lg leading-relaxed">
                Avaliação precisa, marketing de excelência e filtro rigoroso de compradores.
                Venda rápido e sem burocracias.
              </p>
              <button
                onClick={() => openWhatsApp(whatsappSell)}
                className="w-full py-4 text-center rounded-lg font-semibold bg-navy text-white hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2 group"
              >
                Avaliar e Vender
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border-t-4 border-navy">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-navy">
                <Key className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Para quem Compra</h3>
              <p className="text-gray-600 mb-8 flex-grow text-lg leading-relaxed">
                Acesso aos melhores imóveis do mercado, negociação implacável e
                acomhamento até à escritura.
              </p>
              <button
                onClick={() => openWhatsApp(whatsappBuy)}
                className="w-full py-4 text-center rounded-lg font-semibold bg-gray-100 text-navy hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 group border border-gray-200"
              >
                Encontrar a Minha Casa
                <Key className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight">
                Mais do que uma profissão, <br /><span className="text-[#e60000]">uma verdadeira paixão.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#e60000] rounded-full opacity-80"></div>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  No mercado imobiliário desde 2011, já ajudei centenas de famílias a concretizarem os seus
                  sonhos na região do Porto e Norte.
                </p>
                <p>
                  Hoje, a mediação imobiliária já não é apenas o meu trabalho — é a minha paixão e o meu hobby.
                  É por isso que me dedico a cada cliente <strong className="text-navy font-semibold">como se fosse o único.</strong>
                </p>
                <p>
                  Sem pressões, apenas com transparência, experiência e foco no melhor negócio para si.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-red-200 rounded-3xl -z-10 bg-slate-50"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-100 rounded-3xl -z-20"></div>
              <img
                src="/alberto-vendido.jpeg"
                alt="Alberto com placa vendido"
                className="rounded-3xl shadow-xl w-full object-cover max-h-[600px] object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Objetivo Concluído</p>
                  <p className="text-xl font-bold text-navy">Mais Um Sorriso</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-navy border-t border-white/10 pt-16 pb-8 text-center text-white relative z-20">
        <div className="container mx-auto px-6 flex flex-col justify-center items-center space-y-6 text-gray-400">

          <h2 className="text-2xl font-bold text-white">Alberto Ferreira</h2>
          <p className="text-lg">Consultor Imobiliário</p>

          <a
            href="https://www.instagram.com/alberto.ferreira_imobiliaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <span>@alberto.ferreira_imobiliaria</span>
          </a>

          <div className="w-full max-w-md h-px bg-white/10 my-4"></div>

          <p className="text-sm pb-4">Apoiado pela estrutura <span className="text-white font-medium">NOVA Mediação Imobiliária</span>.</p>
          <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Alberto Ferreira. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <button
        onClick={() => openWhatsApp(whatsappGeneral)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 hover:bg-[#20b858] transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-lg shadow-lg font-medium text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 border border-gray-100">
          Fale com o Alberto
        </span>
      </button>

    </div>
  );
};

export default App;