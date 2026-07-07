'use client';

import { useEffect, useState } from 'react';

// ============================================================
// FOND ANIMÉ PARTAGÉ & OPTIMISÉ
// - Particules : animation CSS pure (compositor, hors du thread JS)
//   + génération aléatoire côté client uniquement (pas de mismatch d'hydratation)
// - Orbes : statiques (le flou n'est plus recalculé à chaque frame)
// ============================================================

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

const GridOverlay = ({ fixed }: { fixed?: boolean }) => (
  <div
    className={`${fixed ? 'fixed' : 'absolute'} inset-0 opacity-[0.03] pointer-events-none`}
    style={{
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}
  />
);

const FloatingOrbs = ({ fixed }: { fixed?: boolean }) => (
  <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 overflow-hidden pointer-events-none`}>
    <div
      className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
    />
    <div
      className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
    />
  </div>
);

const ParticleField = ({ fixed, count = 14 }: { fixed?: boolean; count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Généré uniquement côté client → aucune divergence serveur/client (bug d'hydratation résolu).
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
      })),
    );
  }, [count]);

  return (
    <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 overflow-hidden pointer-events-none`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="wis-particle absolute rounded-full bg-blue-400/20"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export function AnimatedBackground({ fixed = false }: { fixed?: boolean }) {
  return (
    <>
      <ParticleField fixed={fixed} />
      <GridOverlay fixed={fixed} />
      <FloatingOrbs fixed={fixed} />
    </>
  );
}
