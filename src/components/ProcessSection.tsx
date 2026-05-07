import { CheckCircle2, MessageSquare, PenTool, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#2563eb]" />,
    title: "Bate-Papo e Diagnóstico",
    description: "Sem compromisso. Uma conversa rápida no WhatsApp ou Meet para entender onde o seu negócio está perdendo dinheiro e tempo.",
    highlight: "100% Gratuito"
  },
  {
    icon: <PenTool className="w-6 h-6 text-[#2563eb]" />,
    title: "Proposta Visual",
    description: "Desenhamos as telas de como o sistema vai ficar antes mesmo de você fechar com a gente. Você vê exatamente o que vai comprar.",
    highlight: "Sem surpresas"
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#2563eb]" />,
    title: "Desenvolvimento Ágil",
    description: "Criamos a sua solução entregando partes funcionais toda semana. Você não precisa esperar 6 meses para ver algo funcionando.",
    highlight: "Entregas Semanais"
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#2563eb]" />,
    title: "Treinamento Rápido",
    description: "Sistemas complexos ninguém usa. Criamos algo tão fácil que sua equipe aprende a usar em um único dia.",
    highlight: "Adoção Imediata"
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#2563eb]" />,
    title: "Suporte Direto",
    description: "Deu dúvida? Esqueça tickets e robôs de atendimento. Você manda mensagem no WhatsApp direto para quem criou o seu sistema.",
    highlight: "No WhatsApp"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2563eb]/20 bg-[#2563eb]/10 text-[#2563eb] text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Zero Burocracia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Como nós tiramos o seu projeto do <span className="text-[#2563eb]">papel</span>
          </h2>
          <p className="mt-6 text-xl text-zinc-400 font-light">
            Esqueça agências lentas. Nosso processo foi desenhado para quem tem pressa e não tem tempo a perder.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-linear-to-b from-transparent via-[#2563eb]/50 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />

          <div className="flex flex-col gap-12 lg:gap-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''} lg:min-h-[300px]`}>
                  
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-[3px] border-[#2563eb]/40 items-center justify-center z-20 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-110 hover:border-[#2563eb]">
                    <div className="w-3 h-3 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                  </div>

                  {/* Horizontal Connector Line (Desktop only) */}
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] w-16 bg-linear-to-r ${isEven ? 'right-1/2 from-transparent to-[#2563eb]/50' : 'left-1/2 from-[#2563eb]/50 to-transparent'} z-10`} />

                  {/* Empty space for alternate sides */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:pl-16'} relative z-30`}>
                    <div className="group bg-[#121212]/90 backdrop-blur-sm rounded-4xl border border-white/5 p-8 lg:p-10 hover:border-[#2563eb]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden">
                      
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-[#2563eb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-[#2563eb] text-sm font-bold tracking-wider uppercase mb-1 block">
                            Passo 0{index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#2563eb] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-lg leading-relaxed relative z-10 mb-6">
                        {step.description}
                      </p>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300 relative z-10">
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
