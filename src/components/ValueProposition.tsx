import { XCircle, CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";

const valueProps = [
  {
    id: 1,
    title: "Sistemas Rápidos",
    description: "Adeus telas lentas e carregamentos infinitos. Construímos aplicações que respondem instantaneamente para que sua equipe foque apenas em produzir.",
    icon: <Clock className="w-6 h-6 text-[#2563eb]" />
  },
  {
    id: 2,
    title: "Automação de Processos",
    description: "Tarefas manuais e repetitivas que geram erro humano são substituídas por fluxos automatizados que rodam 24/7 sem falhas.",
    icon: <TrendingUp className="w-6 h-6 text-[#2563eb]" />
  },
  {
    id: 3,
    title: "Segurança e Estabilidade",
    description: "Sua operação não pode parar. Desenvolvemos com a mesma arquitetura de gigantes da tecnologia, garantindo seus dados sempre disponíveis e blindados.",
    icon: <Shield className="w-6 h-6 text-[#2563eb]" />
  }
];

export default function ValueProposition() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - The Pivot from Problem to Solution */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Pare de adaptar sua empresa a <span className="text-zinc-500 line-through decoration-red-500">softwares ruins</span>
          </h2>
          <p className="mt-6 text-xl text-zinc-400 font-light leading-relaxed">
            Desenvolvemos o sistema que se molda exatamente ao seu modelo de negócio, resolvendo seus gargalos e destravando seu crescimento.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <div 
              key={prop.id} 
              className="group relative bg-[#121212] rounded-4xl p-8 lg:p-10 border border-white/5 hover:border-[#2563eb]/30 transition-colors duration-500"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2563eb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {prop.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2563eb] transition-colors">
                {prop.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                {prop.description}
              </p>

              {/* Decorative Check */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <CheckCircle2 className="w-6 h-6 text-[#2563eb]/50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}