import { useState, useEffect, useRef } from 'react';
import Menu from '@src/components/UI/menu';
import { Neumorphism10 } from './components';
import type { Project } from '@src/types/proyects';
import { projects, integrationIconMap, techIcons, techCategories } from '@src/models/projects';


export default function Proyects() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const [visible, setVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const tick = setInterval(() => {
      if (isPaused.current) return;
      el.scrollLeft += 0.6;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 16);
    return () => clearInterval(tick);
  }, []);

  const handleSelect = (project: Project) => {
    if (selected.title === project.title) return;
    setVisible(false);
    setTimeout(() => {
      setSelected(project);
      setVisible(true);
    }, 200);
  };

  const fade: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  };

  return (
    <>
      <Menu isDesktop={true} />

      <div className="flex flex-col px-8 md:px-16 lg:px-24">

        {/* ── 01 Hero ─────────────────────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row items-center justify-between pt-28 pb-16 gap-8">
          <div className="flex flex-col gap-4 max-w-xl md:items-start items-center md:text-left text-center">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--color-secondColor)' }}
            >
              Portafolio
            </span>
            <h1
              className="text-6xl md:text-7xl font-bold leading-tight"
              style={{ color: 'var(--color-firstColor)' }}
            >
              Mis<br />Proyectos
            </h1>
            <p
              className="text-base leading-7 max-w-md"
              style={{ color: 'var(--color-secondColor)' }}
            >
              Un repositorio detallado de los proyectos que he desarrollado —
              desde APIs y apps móviles hasta plataformas web completas.
              Cada uno refleja decisiones reales de arquitectura y tecnología.
            </p>
          </div>
          <img
            src="drinkSit.webp"
            alt="character"
            className="w-48 md:w-64 lg:w-72 object-contain select-none self-center md:self-end shrink-0 order-last"
          />
        </section>

        {/* ── 02 Selector + Carrusel ──────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row pb-24">

          <div className="w-full md:w-1/4 flex flex-col justify-center pr-0 md:pr-16 py-8">
            <div style={fade} className="flex flex-col gap-5">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'var(--color-secondColor)' }}
              >
                {selected.date}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: 'var(--color-firstColor)' }}
              >
                {selected.title}
              </h2>
              <p
                className="text-base leading-7 max-w-sm"
                style={{ color: 'var(--color-secondColor)' }}
              >
                {selected.description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-3/4 flex items-center relative">

            {/* Blur izquierdo */}
            <div
              className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--color-fifthColor), transparent)',
              }}
            />

            {/* Blur derecho */}
            <div
              className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--color-fifthColor), transparent)',
              }}
            />

            <div
              ref={carouselRef}
              onMouseEnter={() => { isPaused.current = true; }}
              onMouseLeave={() => { isPaused.current = false; }}
              className="flex gap-6 overflow-x-auto py-10 w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...projects, ...projects].map((project, i) => (
                <button
                  key={`${project.title}-${i}`}
                  onClick={() => handleSelect(project)}
                  className={`shrink-0 transition-all duration-300 rounded-[36px] ${
                    selected.title === project.title
                      ? 'scale-105'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={selected.title === project.title ? {
                    outline: '2px solid var(--color-firstColor)',
                    outlineOffset: '4px',
                  } : {}}
                >
                  <Card {...project} />
                </button>
              ))}
            </div>
          </div>

        </section>

        {/* ── Detalle animado ─────────────────────────────────────────────── */}
        <div style={fade}>

          {/* ── 01 Contexto ──────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="01" title="Contexto" image="thinking3D.webp" />
              <div className="flex-1 grid grid-cols-2 gap-6">
                {[
                  { label: 'Tipo',     value: selected.type },
                  { label: 'Cliente',  value: selected.client },
                  { label: 'Duración', value: selected.duration },
                  { label: 'Equipo',   value: selected.teamSize },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-2 p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>{label}</span>
                    <span className="text-base font-semibold" style={{ color: 'var(--color-firstColor)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 02 Stack ──────────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="02" title="Stack Tecnológico" image="inComputer3D.webp" />
              <p className="flex-1 text-sm leading-7" style={{ color: 'var(--color-secondColor)' }}>
                {selected.architecture}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
              {selected.stack.map((tech) => (
                <TechCard key={tech} tech={tech} />
              ))}
            </div>
          </section>

          {/* ── 03 Integraciones ─────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="03" title="Integraciones" image="bothHands3D.webp" />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selected.integrations.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                    <div
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: 'var(--color-thirdColor)', border: '2px solid var(--color-secondColor)' }}
                    >
                      {integrationIcon(item)}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold leading-tight" style={{ color: 'var(--color-firstColor)' }}>{integrationTitle(item)}</span>
                      <span className="text-xs leading-5" style={{ color: 'var(--color-secondColor)' }}>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 04 Mi Rol ─────────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="04" title="Mi Rol" image="hoddie3D.webp" />
              <p className="flex-1 text-base leading-7" style={{ color: 'var(--color-firstColor)' }}>
                {selected.role}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              <div className="p-6 rounded-2xl flex flex-col gap-3" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>Responsabilidades</span>
                <ul className="flex flex-col gap-2">
                  {selected.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-6" style={{ color: 'var(--color-firstColor)' }}>
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondColor)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl flex flex-col gap-3" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>Decisiones técnicas</span>
                <ul className="flex flex-col gap-2">
                  {selected.technicalDecisions.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm leading-6" style={{ color: 'var(--color-firstColor)' }}>
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondColor)' }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── 05 Proceso ───────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="05" title="Proceso" image="run3D.webp" />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Metodología', value: selected.methodology,    icon: '📋' },
                  { label: 'Versiones',   value: selected.versionControl, icon: '🔀' },
                  { label: 'Testing',     value: selected.testing,        icon: '🧪' },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2"
                      style={{ backgroundColor: 'var(--color-thirdColor)', borderColor: 'var(--color-secondColor)' }}
                    >
                      {icon}
                    </div>
                    <span className="text-sm font-bold" style={{ color: 'var(--color-firstColor)' }}>{label}</span>
                    <p className="text-xs leading-5" style={{ color: 'var(--color-secondColor)' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 06 Resultados ─────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="06" title="Resultados" image="jumpHappy.webp" />
              <div className="flex-1 p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                <span className="text-xs font-semibold tracking-widest uppercase block mb-2" style={{ color: 'var(--color-secondColor)' }}>Problema resuelto</span>
                <p className="text-sm leading-7" style={{ color: 'var(--color-firstColor)' }}>{selected.problemSolved}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {selected.metrics.map((m) => (
                <div key={m} className="flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ backgroundColor: 'var(--color-thirdColor)' }}>
                  <span style={{ color: 'var(--color-firstColor)' }} className="text-lg shrink-0">◎</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--color-firstColor)' }}>{m}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>Estado actual</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-firstColor)' }}>{selected.status}</span>
              </div>
            </div>
          </section>

          {/* ── 07 Desafíos & Aprendizajes ───────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="07" title="Desafíos & Aprendizajes" image="angrySit.webp" />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl flex flex-col gap-3" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>Retos</span>
                  <ul className="flex flex-col gap-3">
                    {selected.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm leading-6" style={{ color: 'var(--color-firstColor)' }}>
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondColor)' }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl flex flex-col gap-3" style={{ backgroundColor: 'var(--color-fourthColor)' }}>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-secondColor)' }}>Qué aprendí</span>
                  <ul className="flex flex-col gap-3">
                    {selected.learnings.map((l) => (
                      <li key={l} className="flex items-start gap-3 text-sm leading-6" style={{ color: 'var(--color-firstColor)' }}>
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondColor)' }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── 08 Ver proyecto ───────────────────────────────────────────── */}
          <section className="pb-32 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row md:items-center pt-16 gap-12">
              <SectionHeader number="08" title="Ver proyecto" image="lookUp.webp" />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selected.repo && (
                  <a href={selected.repo} target="_blank" rel="noopener noreferrer"
                    className="group relative h-48 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: 'var(--color-fourthColor)' }}
                  >
                    <img src={selected.image} alt={selected.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-end h-full p-6">
                      <span className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--color-secondColor)' }}>Código fuente</span>
                      <span className="text-lg font-bold" style={{ color: 'var(--color-firstColor)' }}>Repositorio →</span>
                    </div>
                  </a>
                )}
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                    className="group relative h-48 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: 'var(--color-thirdColor)' }}
                  >
                    <img src={selected.image} alt={selected.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-end h-full p-6">
                      <span className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--color-secondColor)' }}>Demo en vivo</span>
                      <span className="text-lg font-bold" style={{ color: 'var(--color-firstColor)' }}>Ver demo →</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

// ─── Integration helpers ──────────────────────────────────────────────────────

function integrationIcon(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, icon] of Object.entries(integrationIconMap)) {
    if (lower.includes(key)) return icon;
  }
  return '◈';
}

function integrationTitle(text: string): string {
  // Extrae el nombre de la tecnología antes del "para" o "con"
  const match = text.match(/^([^(para|con)]+)/i);
  return match ? match[0].trim() : text;
}

// ─── TechCard ─────────────────────────────────────────────────────────────────

function TechCard({ tech }: { tech: string }) {
  const icon = techIcons[tech];
  const category = techCategories[tech] ?? 'Tool';

  return (
    <div
      className="flex flex-col items-center justify-between gap-4 p-6 rounded-2xl border"
      style={{
        backgroundColor: 'var(--color-fourthColor)',
        borderColor: 'var(--color-thirdColor)',
      }}
    >
      {/* Ícono */}
      <div className="flex items-center justify-center w-14 h-14">
        {icon ? (
          <img src={icon} alt={tech} className="w-12 h-12 object-contain" />
        ) : (
          <span
            className="text-2xl font-bold"
            style={{ color: 'var(--color-firstColor)' }}
          >
            {tech.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Nombre */}
      <span
        className="text-sm font-semibold text-center leading-tight"
        style={{ color: 'var(--color-firstColor)' }}
      >
        {tech}
      </span>

      {/* Categoría pill */}
      <span
        className="w-full text-center text-xs font-semibold py-1.5 rounded-full"
        style={{
          backgroundColor: 'var(--color-secondColor)',
          color: 'var(--color-fifthColor)',
        }}
      >
        {category}
      </span>
    </div>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────

function SectionHeader({ number, title, image }: { number: string; title: string; image: string }) {
  return (
    <div className="shrink-0 flex flex-col items-center text-center gap-3 w-full md:w-44">
      <span className="text-7xl md:text-8xl font-bold leading-none select-none" style={{ color: 'var(--color-thirdColor)' }}>
        {number}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-firstColor)' }}>
        {title}
      </h2>
      <img src={image} alt="character" className="w-28 md:w-36 object-contain select-none" />
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ image, title, description, date }: Pick<Project, 'image' | 'title' | 'description' | 'date'>) {
  return (
    <Neumorphism10 className="w-[240px] h-[180px] rounded-[36px]">
      <div className="relative w-[240px] h-[180px] rounded-[36px] overflow-hidden shadow-xl">

        <img
          alt={title}
          src={image}
          className="absolute inset-0 w-full h-full object-cover object-left"
        />

        <div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to top, black 40%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 75%)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="relative flex flex-col justify-end h-full p-4">
          <h3 className="text-base font-semibold text-white leading-none">{title}</h3>
          <p className="text-xs text-white/70 mt-1 leading-4">{description}</p>
          <span className="text-xs text-white/40 mt-1.5">{date}</span>
        </div>

      </div>
    </Neumorphism10>
  );
}
