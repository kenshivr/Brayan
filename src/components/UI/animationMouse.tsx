import React, { useEffect, useRef, useState } from 'react';

const CONFIG = {
  lag: 0.18,
  ringSize: 44,
  dotSize: 7,
  haloScale: 1.9,
  enableOnCoarsePointer: false,
  hoverScale: 1.55,
  activeScale: 0.75
};

interface CursorState {
  x: number; y: number;
  ringX: number; ringY: number;
  hidden: boolean;
  active: boolean;
  hover: boolean;
}

function useFancyCursor() {
  const { lag } = CONFIG;
  const [state, setState] = useState<CursorState>({
    x: 0, y: 0, ringX: 0, ringY: 0,
    hidden: true, active: false, hover: false
  });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setState(s => ({ ...s, x: e.clientX, y: e.clientY, hidden: false }));
    };
    const onEnter = () => setState(s => ({ ...s, hidden: false }));
    const onLeave = () => setState(s => ({ ...s, hidden: true, hover: false }));
    const onDown = () => setState(s => ({ ...s, active: true }));
    const onUp = () => setState(s => ({ ...s, active: false }));
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hover = !!el.closest('[data-cursor="hover"], a, button, [role="button"]');
      setState(s => s.hover === hover ? s : { ...s, hover });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    const loop = () => {
      setState(s => ({
        ...s,
        ringX: s.ringX + (target.current.x - s.ringX) * lag,
        ringY: s.ringY + (target.current.y - s.ringY) * lag
      }));
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return state;
}

const AnimationMouse: React.FC = () => {
  const isClient = typeof window !== 'undefined';
  const coarse = isClient && window.matchMedia('(pointer: coarse)').matches;
  const cursorEnabled = CONFIG.enableOnCoarsePointer || !coarse;
  const { x, y, ringX, ringY, hidden, active, hover } = useFancyCursor();

  useEffect(() => {
    if (!cursorEnabled) return;
    document.documentElement.classList.add('cursor-none');
    return () => {
      document.documentElement.classList.remove('cursor-none');
    };
  }, [cursorEnabled]);

  if (!cursorEnabled) return null;

  const { ringSize, dotSize, haloScale, hoverScale, activeScale } = CONFIG;
  const ringScale = hover ? hoverScale : active ? activeScale : 1;
  const dotScale = active ? 0.6 : 1;
  const haloVisible = hover;
  const baseBlend = hover ? 'mix-blend-difference' : 'mix-blend-normal';

  return (
    <>
      {/* DOT */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-boneWhite transition-transform duration-150 ease-out will-change-transform"
        style={{
          width: dotSize,
          height: dotSize,
          transform: `translate(${x - dotSize/2}px, ${y - dotSize/2}px) scale(${dotScale})`,
          opacity: hidden ? 0 : 1
        }}
      />
      {/* RING */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-boneWhite transition-[transform,opacity] duration-200 ease-out will-change-transform ${baseBlend}`}
        style={{
          width: ringSize,
          height: ringSize,
          transform: `translate(${ringX - ringSize/2}px, ${ringY - ringSize/2}px) scale(${ringScale})`,
          opacity: hidden ? 0 : 1
        }}
      />
      {/* HALO */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full bg-boneWhite blur-2xl transition-opacity duration-300 will-change-transform"
        style={{
          width: ringSize * haloScale,
          height: ringSize * haloScale,
          transform: `translate(${ringX - (ringSize*haloScale)/2}px, ${ringY - (ringSize*haloScale)/2}px)`,
          opacity: haloVisible ? 1 : 0
        }}
      />
    </>
  );
};

export default AnimationMouse;