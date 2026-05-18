'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    title: 'Consultoria de TI Web',
    category: 'Sistema de Gestão & Financeiro',
    description: 'Substituímos dezenas de planilhas manuais por um sistema completo que automatiza o faturamento e a geração de relatórios. O resultado? Previsibilidade financeira total e zero erros de cálculo.',
    image: '/images/consultoria-cover.png',
    link: 'https://wa.me/5551999832724?text=Olá,%20tenho%20interesse%20em%20uma%20demo%20do%20sistema%20de%20Gestão%20e%20Financeiro.',
    linkText: 'Tenho interesse em uma demo',
    results: [
      { metric: '100%', label: 'Automatizado' },
      { metric: 'Zero', label: 'Uso de planilhas' }
    ],
    technologies: ['Automação', 'Dashboards', 'Gestão Financeira'],
    theme: 'from-[#2563eb]/20 to-transparent'
  },
  {
    id: '2',
    title: 'Armazém Girassol',
    category: 'E-commerce & Controle de Estoque',
    description: 'Desenvolvimento de uma plataforma de vendas online totalmente integrada com o sistema de retaguarda (estoque). Uma solução sob medida para digitalizar a operação de um varejo local.',
    image: '/images/armazem-girassol-cover.jpeg',
    link: 'https://armazem-girassol.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Digital', label: 'Vendas 24/7' },
      { metric: 'Integrado', label: 'Controle de Estoque' }
    ],
    technologies: ['E-commerce', 'Varejo', 'Integração'],
    theme: 'from-emerald-600/20 to-transparent'
  },
  {
    id: '3',
    title: 'Colab+ | RH',
    category: 'Software de Gestão Interna (DP)',
    description: 'Sistema completo para Departamento Pessoal: gestão de colaboradores, cálculo automatizado de impostos e benefícios, checklists de admissão e alertas inteligentes de vencimento de férias e exames (ASO).',
    image: '/images/colab-cover.png',
    link: 'https://colabplus-xi.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Automático', label: 'Cálculo de Impostos' },
      { metric: 'Alertas', label: 'Férias e ASO' }
    ],
    technologies: ['Recursos Humanos', 'Gestão', 'Alertas'],
    theme: 'from-purple-600/20 to-transparent'
  },
  {
    id: '4',
    title: 'Octohub Agência',
    category: 'Landing Page de Alta Conversão',
    description: 'Criação de uma presença digital agressiva e focada em captação de leads, destacando serviços e portfólio de forma magnética para atrair novos contratos.',
    image: '/images/octohub-cover.png',
    link: 'https://octo-hub-site.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Leads', label: 'Captação Ativa' },
      { metric: 'Design', label: 'Foco em Performance' }
    ],
    technologies: ['Web Design', 'Copywriting', 'SEO'],
    theme: 'from-orange-600/20 to-transparent'
  },
  {
    id: '5',
    title: 'Psicóloga Karine Strapazon',
    category: 'Site Profissional (Saúde)',
    description: 'Página focada em conversão para atendimento clínico. Estruturada para transmitir autoridade, acolhimento e facilitar o agendamento de consultas de forma automática.',
    image: '/images/karine-cover.png',
    link: 'https://psicologakarinestrapazon.com/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Direto', label: 'Agendamento WhatsApp' },
      { metric: '100%', label: 'Responsivo (Mobile)' }
    ],
    technologies: ['Saúde', 'Posicionamento', 'Conversão'],
    theme: 'from-pink-600/20 to-transparent'
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="portfolio" ref={containerRef} className="relative bg-[#0a0a0a] pt-16 pb-0">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* Section Header */}
      <div className="w-full px-4 md:px-12 pointer-events-none mb-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          NOSSOS <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROJETOS</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-xl text-base md:text-lg">
          Conheça algumas das empresas que transformaram suas operações com nossas soluções.
        </p>
      </div>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={project.id}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  i,
  progress,
  range,
  targetScale
}: {
  project: typeof projects[0];
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) {
  // useTransform is a MotionValue — it never triggers React re-renders
  const scale = useTransform(progress, range, [1, targetScale]);
  const overlayOpacity = useTransform(progress, range, [0, 0.35]);

  const isLast = i === projects.length - 1;
  const shadowClass = isLast ? 'shadow-none' : 'shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.7)]';

  return (
    <div
      className={`${isLast ? 'h-[100vh]' : 'h-[120vh]'} sticky flex items-start justify-center top-0 pt-4`}
    >
      <motion.div
        style={{ scale, top: '5vh', willChange: 'transform' }}
        className={`relative w-full max-w-[1400px] h-[75vh] md:h-[80vh] min-h-[500px] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden ${shadowClass} mx-4 md:mx-auto origin-top group z-10`}
      >
        {/* Scroll darkening overlay — GPU composited, zero JS cost */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-50 pointer-events-none"
        />

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={`${project.title} Cover`}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-700" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
        </div>

        {/* Default state: title centered */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-out group-hover:opacity-0 group-hover:-translate-y-8">
          <span className="mb-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[7rem] font-bold text-white tracking-tighter drop-shadow-2xl text-center px-4 leading-tight">
            {project.title}
          </h3>
          <div className="mt-6 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span className="hidden sm:inline">Passe o mouse para ver o projeto</span>
            <span className="sm:hidden">Toque para ver o projeto</span>
          </div>
        </div>

        {/* Hover state: split layout — browser mockup + info */}
        <div className="absolute inset-0 z-20 flex flex-col lg:flex-row items-center justify-center gap-6 p-6 md:p-10 pointer-events-none opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">

          {/* Browser mockup */}
          <div className="w-full lg:w-[55%] aspect-video rounded-xl md:rounded-2xl border border-white/20 bg-[#121212] shadow-2xl overflow-hidden relative flex-shrink-0">
            {/* Browser chrome */}
            <div className="h-7 bg-white/10 border-b border-white/10 flex items-center px-3 gap-1.5 absolute top-0 w-full z-30">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <div className="ml-3 h-4 flex-1 max-w-[180px] bg-white/5 rounded text-[10px] text-zinc-500 flex items-center justify-center truncate px-2">
                {project.link.replace('https://', '').split('?')[0]}
              </div>
            </div>
            <div className="absolute top-7 left-0 w-full h-[calc(100%-28px)]">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Info panel */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4 pointer-events-auto">
            <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase">{project.category}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed hidden md:block">{project.description}</p>

            {/* Results */}
            <div className="grid grid-cols-2 gap-3">
              {project.results.map((r, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-xl font-bold text-white">{r.metric}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{r.label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-colors w-fit shadow-lg"
            >
              {project.linkText || 'Ver projeto'}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}