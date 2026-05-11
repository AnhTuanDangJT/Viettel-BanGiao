"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export const LoadingIntro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isDone, setIsDone] = useState(false);

  interface Particle {
    id: number;
    left: string;
    top: string;
    duration: string;
    delay: string;
  }

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);

    // Stage 1: Logo appears at center (already true by default)
    
    // Stage 2: Start moving to header after 2 seconds
    const moveTimer = setTimeout(() => {
      setIsMoving(true);
    }, 2200);

    // Stage 3: Finish intro after move is complete (0.8s animation)
    const endTimer = setTimeout(() => {
      setIsDone(true);
      // Wait for fade out to remove from DOM (now 1000ms)
      setTimeout(() => setIsVisible(false), 1000);
    }, 3200);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={clsx(
        "fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ease-in-out",
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{
        background: "radial-gradient(circle at 30% 30%, #ff1a4a 0%, #ee0033 45%, #d0021b 100%)"
      }}
    >
      {/* Cinematic Background Pattern */}
      <div className="absolute inset-0 opacity-100 pointer-events-none overflow-hidden">
        {/* Custom Waving White Lines - High Density */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <svg key={i} className="absolute w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <path 
                d="M-400 400 Q -200 300 0 400 T 400 400 T 800 400 T 1200 400 T 1600 400" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5" 
                style={{
                  transform: `translateY(${(i - 6) * 60}px) rotate(${i * 3}deg)`,
                  animation: `wave-motion ${6 + i}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            </svg>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {particles.map((p) => (
            <div 
              key={p.id}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-particle"
              style={{
                left: p.left,
                top: p.top,
                animationDuration: p.duration,
                animationDelay: p.delay
              }}
            />
          ))}
        </div>

        <svg width="100%" height="100%" className="absolute inset-0 z-10">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.8" opacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Logo */}
      <div 
        className={clsx(
          "relative transition-all duration-[1000ms] ease-[cubic-bezier(0.7,0,0.3,1)]",
          isMoving ? "scale-[0.25] md:scale-[0.35] translate-x-[-35%] md:translate-x-[-38%] translate-y-[-42%] md:translate-y-[-44%] opacity-0" : "scale-[2.5] md:scale-[4.5]"
        )}
      >
        <div className="relative w-80 h-40 md:w-[600px] md:h-[300px] animate-float">
          <Image 
            src="/images/homepage/logo-viettel-store.png" 
            alt="Viettel Store" 
            fill 
            className="object-contain filter brightness-0 invert" 
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.5); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes wave-motion {
          0% { transform: translate(-100px, 0px) scaleY(1); }
          100% { transform: translate(100px, 20px) scaleY(1.3); }
        }
        @keyframes particle {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(100px, -100px); opacity: 0.5; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-particle { animation: particle 15s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
};
