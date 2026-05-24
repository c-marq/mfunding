import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { AuroraBackground } from '../ui/aurora-background';
import { ShimmerButton } from '../ui/shimmer-button';
import { MagneticButton } from '../ui/magnetic-button';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <AuroraBackground variant="intense" showParticles={true}>
      {/* Mouse spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none z-[1]"
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, rgba(148,163,184,0.10) 0%, transparent 50%)',
        }}
      />

      {/* Soft floating orbs */}
      <motion.div
        className="absolute top-24 right-[15%] w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"
        style={{ y }}
        animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-[8%] w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], scale: [1, 0.85, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ opacity }}
        className="container-max relative z-10 pt-28 pb-14 lg:pt-32 lg:pb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Slim badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-mint-green"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-white/90 text-sm font-medium">
              Funded in as little as 24 hours
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            MCA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-green via-teal to-mint-green">
              Advance
            </span>
          </motion.h1>

          {/* Plain-language definition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            A merchant cash advance puts a lump sum of working capital in your account today—repaid
            as a small percentage of your future sales. No credit score requirement, no collateral,
            funded in as little as 24 hours.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <MagneticButton>
              <a href="https://my.mfunding.net/app">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                  <motion.div
                    className="absolute inset-0 bg-mint-green rounded-xl blur-xl opacity-40"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <ShimmerButton
                    shimmerColor="#00D49D"
                    shimmerSize="0.15em"
                    background="linear-gradient(135deg, #00D49D 0%, #00A896 100%)"
                    className="text-midnight-blue font-bold text-lg px-10 py-4 relative"
                  >
                    Apply Now
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRightIcon className="w-5 h-5 inline" />
                    </motion.span>
                  </ShimmerButton>
                </motion.div>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Micro-copy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/60 text-sm"
          >
            {["Won't affect your credit", 'No obligation', '5-minute application'].map((text) => (
              <span key={text} className="flex items-center gap-2">
                <span className="text-mint-green">✓</span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
