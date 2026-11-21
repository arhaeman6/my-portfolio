import { useEffect, useRef, useState } from 'react';
import { Braces, Cpu, Database, Layers, Sparkles } from 'lucide-react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function HeroVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const nodeCount = 26;
    const nodes: NodePoint[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * (width || 480),
      y: Math.random() * (height || 480),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 1,
    }));

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 16 || a.x > width - 16) a.vx *= -1;
          if (a.y < 16 || a.y > height - 16) a.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.28;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = i % 2 === 0 ? 'rgba(167, 139, 250, 0.72)' : 'rgba(96, 165, 250, 0.72)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(drawFrame);
      }
    };

    drawFrame();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -py * 10,
      rotateY: px * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient radial glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-blue-500/20 blur-3xl pointer-events-none"
      />

      {/* Interactive 3D Sculpted Stage */}
      <div
        className="relative w-full h-full max-w-[480px] max-h-[480px] rounded-3xl border border-white/[0.08] bg-[#0a0d1a]/70 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.65)] overflow-hidden transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Neural Mesh Canvas */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Subtle geometric grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Orbital Rings */}
        <div
          aria-hidden="true"
          className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-violet-400/20 animate-orbit pointer-events-none"
        >
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.9)]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-blue-400/25 border-dashed animate-orbit-reverse pointer-events-none"
        >
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
        </div>

        {/* Central Glassmorphic Python & AI Core */}
        <div
          className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl border border-white/15 bg-gradient-to-br from-[#12162b]/95 via-[#0c1020]/95 to-[#090b16]/95 shadow-[0_0_60px_rgba(109,40,217,0.3)] flex flex-col items-center justify-center gap-2.5"
          style={{ transform: 'translateZ(36px)' }}
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 border border-violet-400/30 flex items-center justify-center text-violet-200">
            <Cpu className="w-6 h-6" />
          </div>
          <div className="text-center">
            <p className="font-display text-sm font-semibold text-white tracking-tight">
              Python &amp; AI
            </p>
            <p className="font-mono text-[11px] text-slate-400">Core Engine</p>
          </div>
        </div>

        {/* Floating Glass Nodes representing Python & AI stack */}
        <div
          className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 animate-float-gentle"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#0d1122]/85 backdrop-blur-md shadow-lg">
            <Braces className="w-4 h-4 text-violet-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Python · FastAPI</p>
              <p className="text-[11px] text-slate-400 leading-tight">Backend APIs</p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-7 right-6 sm:top-10 sm:right-8 z-20 animate-float-gentle"
          style={{ animationDelay: '1.2s', transform: 'translateZ(42px)' }}
        >
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#0d1122]/85 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Machine Learning</p>
              <p className="text-[11px] text-slate-400 leading-tight">Models &amp; Insights</p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-7 left-6 sm:bottom-9 sm:left-8 z-20 animate-float-gentle"
          style={{ animationDelay: '2.1s', transform: 'translateZ(46px)' }}
        >
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#0d1122]/85 backdrop-blur-md shadow-lg">
            <Database className="w-4 h-4 text-indigo-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Pandas · NumPy</p>
              <p className="text-[11px] text-slate-400 leading-tight">Data Pipelines</p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 animate-float-gentle"
          style={{ animationDelay: '0.7s', transform: 'translateZ(54px)' }}
        >
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#0d1122]/85 backdrop-blur-md shadow-lg">
            <Layers className="w-4 h-4 text-violet-300 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white leading-tight">CrewAI · Docker</p>
              <p className="text-[11px] text-slate-400 leading-tight">Agentic Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
