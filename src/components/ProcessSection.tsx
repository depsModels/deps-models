'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Bate-Papo e Diagnóstico',
    description: 'Sem compromisso. Uma conversa rápida no WhatsApp ou Meet para entender onde o seu negócio está perdendo dinheiro e tempo.',
    tags: ['100% Gratuito', 'Sem Compromisso', 'Diagnóstico Rápido'],
  },
  {
    number: '02',
    title: 'Proposta Visual',
    description: 'Desenhamos as telas do sistema antes de você fechar negócio. Você vê exatamente o que vai comprar, sem surpresas.',
    tags: ['Sem Surpresas', 'Aprovação Visual', 'Proposta de Valor'],
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil',
    description: 'Criamos a sua solução entregando partes funcionais toda semana. Você não precisa esperar 6 meses para ver algo funcionando.',
    tags: ['Entregas Semanais', 'Transparente', 'Ajustes Rápidos'],
  },
  {
    number: '04',
    title: 'Treinamento da Equipe',
    description: 'Sistemas complexos ninguém usa. Criamos algo tão fácil que sua equipe aprende em um único dia, sem resistência.',
    tags: ['Onboarding Fácil', 'Adoção Imediata', 'Sem Complexidade'],
  },
  {
    number: '05',
    title: 'Suporte Direto (WhatsApp)',
    description: 'Esqueça tickets demorados ou robôs. Você fala diretamente no WhatsApp com quem desenvolveu o seu projeto.',
    tags: ['Atendimento Humano', 'Respostas Rápidas', 'Parceria Longa'],
  },
];

export default function ProcessSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Each step is 1100px wide; we slide through (steps.length - 1) steps
  const itemWidth = 1100;
  const totalTranslation = (steps.length - 1) * itemWidth;
  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${totalTranslation}px`]);

  return (
    // 280vh gives a comfortable horizontal scroll pace without being exhausting
    <section id="process" ref={targetRef} className="relative h-auto md:h-[280vh] bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />

      {/* Section title — sticky, always visible while inside this section */}
      <div className="sticky top-0 w-full z-50 pt-0 md:pt-5 px-4 md:px-12 pointer-events-none h-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none inline-block p-2 md:p-0 rounded-lg">
          NOSSO <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROCESSO</span>
        </h2>
      </div>

      {/* Pinned viewport */}
      <div className="relative md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-hidden py-12 md:py-0">

        {/* Scroll progress bar */}
        <motion.div
          className="hidden md:block absolute top-0 left-0 h-[2px] z-50 origin-left w-full"
          style={{
            scaleX: scrollYProgress,
            background: 'linear-gradient(90deg, transparent, #2563eb, #60a5fa)',
            boxShadow: '0 0 10px #2563eb',
          }}
        />

        {/* Mobile: plain vertical list */}
        <div className="md:hidden flex flex-col gap-16 px-4 w-full max-w-3xl mx-auto relative z-10 mt-16">
          {steps.map((step, index) => (
            <MobileStep key={index} step={step} />
          ))}
        </div>

        {/* Desktop: horizontal scroll timeline */}
        <div className="hidden md:flex w-full items-center relative h-full">
          <motion.div
            style={{ x }}
            className="flex items-center w-max px-[calc(50vw-550px)] relative z-10 h-full"
          >
            {/* Static connector line */}
            <div
              className="absolute top-1/2 left-[50vw] h-[2px] bg-white/10 -translate-y-1/2"
              style={{ width: `${totalTranslation}px` }}
            />
            {/* Animated active line */}
            <motion.div
              className="absolute top-1/2 left-[50vw] h-[2px] bg-[#2563eb] -translate-y-1/2 origin-left z-0"
              style={{
                width: `${totalTranslation}px`,
                scaleX: scrollYProgress,
                boxShadow: '0 0 15px #2563eb',
              }}
            />

            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step}
                index={index}
                progress={scrollYProgress}
                total={steps.length}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  progress,
  total,
}: {
  step: typeof steps[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const stepProgress = index / (total - 1);

  // Single derived MotionValue for distance from center — all other values branch from this
  const distance = useTransform(progress, (p) => Math.abs(p - stepProgress));

  // Consolidated transforms — fewer MotionValues than the beta
  const opacity = useTransform(distance, [0, 0.15, 0.28], [1, 1, 0.12]);
  const yOffset = useTransform(distance, [0, 0.25], [0, 28]);
  const itemScale = useTransform(distance, [0, 0.15, 0.28], [1, 1, 0.88]);
  const dotScale = useTransform(distance, [0, 0.15], [1.8, 1]);

  // Giant number parallax — simple linear map, no function overhead
  const parallaxX = useTransform(progress, [stepProgress - 0.5, stepProgress + 0.5], [-120, 120]);

  return (
    <motion.div
      className="relative flex flex-row items-center justify-between w-[1100px] h-[600px] shrink-0 px-12"
      style={{ scale: itemScale, willChange: 'transform' }}
    >
      {/* Giant background number */}
      <motion.div
        className="absolute top-1/2 left-[5%] -translate-y-[55%] text-[20rem] lg:text-[26rem] font-black pointer-events-none select-none z-0"
        style={{
          color: 'rgba(37,99,235,0.05)',
          WebkitTextStroke: '2px rgba(37,99,235,0.35)',
          opacity,
          x: parallaxX,
          willChange: 'transform, opacity',
        }}
      >
        {step.number}
      </motion.div>

      {/* Left column: text */}
      <motion.div
        className="relative z-10 w-1/2 pr-8 flex flex-col justify-center"
        style={{ opacity, y: yOffset, willChange: 'transform, opacity' }}
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className="w-4 h-4 rounded-full border-2 border-[#2563eb]"
            style={{
              backgroundColor: useTransform(distance, [0, 0.15], ['#2563eb', '#0a0a0a']),
              boxShadow: useTransform(distance,
                [0, 0.1, 0.2],
                [
                  '0px 0px 28px 5px rgba(37,99,235,0.85)',
                  '0px 0px 16px 3px rgba(37,99,235,0.5)',
                  '0px 0px 0px 0px rgba(37,99,235,0)',
                ]
              ),
              scale: dotScale,
            }}
          />
          <span className="text-[#2563eb] font-mono text-lg font-bold tracking-widest">
            STEP {step.number}
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-wide leading-tight">
          {step.title}
        </h3>
        <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
          {step.description}
        </p>

        <div className="flex flex-col gap-3">
          {step.tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] opacity-70" />
              <span className="text-sm md:text-base text-zinc-300 tracking-wide">{tag}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right column: abstract visual */}
      <motion.div
        className="relative z-10 w-[420px] h-[420px] flex items-center justify-center"
        style={{ opacity, scale: useTransform(distance, [0, 0.15], [1, 0.82]), willChange: 'transform, opacity' }}
      >
        <AbstractVisual stepNumber={step.number} />
      </motion.div>
    </motion.div>
  );
}

function AbstractVisual({ stepNumber }: { stepNumber: string }) {
  switch (stepNumber) {
    case '01':
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative w-56 h-56">
            <div className="absolute top-1/2 left-1/2 w-28 h-[1px] bg-[#2563eb]/50 origin-left -rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-28 h-[1px] bg-[#2563eb]/50 origin-left rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-20 h-[1px] bg-[#2563eb]/50 origin-left rotate-[120deg]" />
            <div className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-[#2563eb] shadow-[0_0_20px_#2563eb] z-10" />
            <div className="absolute top-[10%] left-[80%] w-4 h-4 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
            <div className="absolute top-[65%] left-[85%] w-3 h-3 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
            <div className="absolute top-[80%] left-[15%] w-5 h-5 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
          </div>
        </div>
      );
    case '02':
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl p-8 flex flex-col gap-5">
          <div className="w-full h-28 rounded-xl border border-white/10 bg-white/[0.01] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
            <div className="w-10 h-10 rounded-full bg-white/5" />
          </div>
          <div className="w-3/4 h-3 rounded-full bg-white/10" />
          <div className="w-full h-3 rounded-full bg-white/5" />
          <div className="w-5/6 h-3 rounded-full bg-white/5" />
          <div className="mt-auto flex justify-between gap-4">
            <div className="w-1/2 h-10 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/50" />
            <div className="w-1/2 h-10 rounded-lg bg-white/5 border border-white/10" />
          </div>
        </div>
      );
    case '03':
      return (
        <div className="relative w-full h-full border border-white/5 bg-[#0a0a0a]/80 rounded-3xl p-6 font-mono text-sm overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex flex-col gap-3 text-[#2563eb]/70">
            <p><span className="text-purple-400">const</span> build = <span className="text-blue-400">async</span> () ={">"} {"{"}</p>
            <p className="pl-4"><span className="text-purple-400">await</span> optimizePerformance();</p>
            <p className="pl-4"><span className="text-purple-400">await</span> deployArchitecture();</p>
            <p className="pl-4">return <span className="text-green-400">&quot;100% Escalável&quot;</span>;</p>
            <p>{"}"}</p>
            <div className="mt-3 w-1/2 h-[1px] bg-gradient-to-r from-[#2563eb] to-transparent" />
            <p className="animate-pulse mt-1 text-white/50">{">"} compiling assets...</p>
          </div>
        </div>
      );
    case '04':
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-[#2563eb] shadow-[0_0_12px_#2563eb] top-1/2 animate-[scan_3s_ease-in-out_infinite]" />
          <div className="grid grid-cols-3 gap-3 p-8 w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`rounded-lg border ${i === 4 ? 'border-[#2563eb] bg-[#2563eb]/10' : 'border-white/5 bg-white/[0.01]'} flex items-center justify-center`}
              >
                {i === 4 && <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />}
              </div>
            ))}
          </div>
        </div>
      );
    case '05':
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-tr from-[#2563eb]/10 to-transparent rounded-3xl p-8 flex items-end">
          <div className="w-full flex items-end justify-between h-44 gap-3">
            <div className="w-full bg-white/5 rounded-t-sm h-[20%]" />
            <div className="w-full bg-white/10 rounded-t-sm h-[40%]" />
            <div className="w-full bg-white/15 rounded-t-sm h-[60%]" />
            <div className="w-full bg-[#2563eb]/40 rounded-t-sm h-[80%] relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#2563eb] shadow-[0_0_16px_#2563eb]" />
            </div>
            <div className="w-full bg-[#2563eb] rounded-t-sm h-[100%] shadow-[0_0_25px_rgba(37,99,235,0.5)] relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[14px] border-l-transparent border-r-transparent border-b-white animate-bounce" />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function MobileStep({ step }: { step: typeof steps[0] }) {
  return (
    <div className="relative flex flex-col pl-10">
      {/* Vertical line */}
      <div className="absolute left-[9px] top-7 bottom-[-4rem] w-[2px] bg-white/10" />
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#2563eb] shadow-[0_0_10px_#2563eb]" />
      {/* Giant number */}
      <div
        className="absolute -top-7 -left-3 text-[7rem] font-black pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.01)', WebkitTextStroke: '1px rgba(37,99,235,0.12)' }}
      >
        {step.number}
      </div>
      <div className="relative z-10">
        <span className="text-[#2563eb] font-mono text-xs font-bold tracking-widest">STEP {step.number}</span>
        <h3 className="text-xl font-bold text-white mt-1 mb-2 tracking-wide">{step.title}</h3>
        <p className="text-zinc-400 text-base leading-relaxed font-light">{step.description}</p>
      </div>
    </div>
  );
}
