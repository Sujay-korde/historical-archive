"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HISTORICAL_FEATURES,
  type FeatureItem,
} from "@/data/historical-features";
export type { FeatureItem };

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export interface FeatureCarouselProps {
  items?: FeatureItem[];
  className?: string;
  onSelect?: (item: FeatureItem) => void;
}

export function FeatureCarousel({
  items = HISTORICAL_FEATURES,
  className,
  onSelect,
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % items.length) + items.length) % items.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + items.length) % items.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = items.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className={cn("w-full max-w-7xl mx-auto py-8 md:py-12", className)}>
      <div className="relative overflow-hidden rounded-[1.75rem] lg:rounded-[2.5rem] flex flex-col lg:flex-row min-h-[580px] lg:aspect-[16/9] border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Left Interactive Track Column */}
        <div className="w-full lg:w-[42%] min-h-[380px] md:min-h-[460px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 lg:pl-12 bg-zinc-900/60 border-b lg:border-b-0 lg:border-r border-zinc-800/80">
          {/* Subtle gradient fades top/bottom */}
          <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-transparent z-40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent z-40 pointer-events-none" />

          {/* Section Kicker */}
          <div className="absolute top-6 left-6 md:left-12 z-50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Live Folio Catalog
            </span>
          </div>

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20 pt-8 lg:pt-0">
            {items.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(items.length / 2),
                items.length / 2,
                distance
              );

              const IconComponent = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "100%",
                    maxWidth: "24rem",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.35,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 24,
                    mass: 0.9,
                  }}
                  className="absolute flex items-center justify-start w-full"
                >
                  <button
                    onClick={() => {
                      handleChipClick(index);
                      if (onSelect) onSelect(feature);
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "w-full relative flex items-center justify-between gap-3 px-5 md:px-6 py-3.5 rounded-xl transition-all duration-500 text-left group border",
                      isActive
                        ? "bg-white text-zinc-950 border-white shadow-[0_0_25px_rgba(255,255,255,0.15)] z-10"
                        : "bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200"
                    )}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-400 shrink-0",
                          isActive
                            ? "bg-zinc-950 text-white"
                            : "bg-zinc-800/60 text-zinc-400 group-hover:text-zinc-200"
                        )}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div
                          className={cn(
                            "font-sans font-medium text-sm md:text-[14px] truncate tracking-tight",
                            isActive ? "text-zinc-950 font-semibold" : "text-zinc-300"
                          )}
                        >
                          {feature.label}
                        </div>
                        <div
                          className={cn(
                            "text-[10px] font-mono uppercase tracking-wider truncate mt-0.5",
                            isActive ? "text-zinc-600" : "text-zinc-500"
                          )}
                        >
                          {feature.category}
                        </div>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "text-[10px] font-mono px-2 py-0.5 rounded shrink-0",
                        isActive
                          ? "bg-zinc-200 text-zinc-800 font-semibold"
                          : "bg-zinc-800 text-zinc-500"
                      )}
                    >
                      {feature.date}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Counter */}
          <div className="absolute bottom-6 left-6 md:left-12 z-50 flex items-center gap-3">
            <span className="font-mono text-[11px] text-zinc-400">
              0{currentIndex + 1} <span className="text-zinc-600">/ 0{items.length}</span>
            </span>
          </div>
        </div>

        {/* Right Photographic Vitrine Display */}
        <div className="flex-1 min-h-[480px] md:min-h-[580px] lg:h-full relative bg-zinc-950 flex items-center justify-center py-12 md:py-16 px-6 md:px-12 lg:px-10 overflow-hidden">
          {/* Subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative w-full max-w-[480px] aspect-[4/5] flex items-center justify-center">
            {items.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800/90 bg-zinc-900 shadow-2xl origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 brightness-95 contrast-105"
                        : "grayscale brightness-50 blur-[1px]"
                    )}
                  />

                  {/* High-end editorial dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Header Pill */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{feature.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 text-[11px] font-mono font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{feature.confidence}% AI Match</span>
                    </div>
                  </div>

                  {/* Bottom Curatorial Card Description */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-30"
                      >
                        <div className="inline-flex items-center gap-2 text-zinc-400 text-[11px] font-mono uppercase tracking-[0.2em] mb-2">
                          <span>FOLIO {index + 1}</span>
                          <span>•</span>
                          <span>{feature.category}</span>
                        </div>

                        <h3 className="text-white font-serif text-2xl md:text-3xl leading-snug tracking-tight mb-2">
                          {feature.label}
                        </h3>

                        <p className="text-zinc-300 font-sans text-xs md:text-sm leading-relaxed line-clamp-3">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
