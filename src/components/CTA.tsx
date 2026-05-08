"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

export default function CTA() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Olá! Gostaria de falar com um especialista da DEPS Models sobre o meu projeto.`);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Massive Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Pronto para <br />
            <span className="text-[#2563eb] italic font-serif">organizar a casa?</span>
          </h2>
          
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
            Pare de perder dinheiro com processos manuais. Clique no botão abaixo e fale diretamente com um especialista pelo WhatsApp. Sem formulários longos, sem burocracia.
          </p>

          <button 
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center justify-center py-5 px-12 bg-white text-black font-bold text-lg md:text-xl rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Button Hover Effect */}
            <div className="absolute inset-0 bg-[#2563eb] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
              Falar com Especialista Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
