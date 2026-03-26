import { useState, useEffect, useRef } from 'react';
import Menu from '@src/components/UI/menu';
import { Neumorphism10 } from './components';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  image: string;
  title: string;
  description: string;
  date: string;
  // Contexto
  type: string;
  client: string;
  duration: string;
  teamSize: string;
  // Técnico
  stack: string[];
  architecture: string;
  integrations: string[];
  // Rol
  role: string;
  responsibilities: string[];
  technicalDecisions: string[];
  // Proceso
  methodology: string;
  versionControl: string;
  testing: string;
  // Resultados
  metrics: string[];
  problemSolved: string;
  status: string;
  // Desafíos y aprendizajes
  challenges: string[];
  learnings: string[];
  // Links
  repo?: string;
  demo?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    image: 'api.png',
    title: 'API REST',
    description: 'API REST con autenticación y endpoints documentados.',
    date: 'Mar 2026',
    type: 'Proyecto personal',
    client: 'Uso interno',
    duration: '3 meses',
    teamSize: 'Solo',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker', 'Swagger'],
    architecture: 'Arquitectura en capas (MVC) con separación de responsabilidades por módulo.',
    integrations: ['JWT para auth', 'Docker para deploy', 'Swagger para documentación'],
    role: 'Desarrollador Full Stack — diseñé la arquitectura, implementé auth y documenté endpoints.',
    responsibilities: ['Diseño de la arquitectura de rutas', 'Implementación de autenticación JWT', 'Documentación con Swagger', 'Containerización con Docker'],
    technicalDecisions: ['JWT sobre sessions por escalabilidad horizontal', 'PostgreSQL sobre MongoDB por integridad relacional'],
    methodology: 'Kanban personal con issues en Gitea',
    versionControl: 'Git Flow con ramas feature/, fix/ y main',
    testing: 'Tests de integración con Jest sobre los endpoints principales',
    metrics: ['100% de endpoints documentados', 'Tiempo de respuesta promedio < 80ms'],
    problemSolved: 'Centralizar la lógica de negocio en un solo servicio consumible por múltiples clientes.',
    status: 'En producción',
    challenges: ['Diseñar rutas escalables desde el inicio', 'Manejar refresh tokens sin comprometer la UX'],
    learnings: ['Importancia de definir contratos de API antes de codear', 'Cómo estructurar middlewares sin acoplarlos al negocio'],
    repo: '#',
    demo: '#',
  },
  {
    image: 'app.png',
    title: 'App Mobile',
    description: 'Aplicación móvil multiplataforma.',
    date: 'Mar 2026',
    type: 'Freelance',
    client: 'Cliente privado',
    duration: '4 meses',
    teamSize: '2 personas',
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'REST API'],
    architecture: 'Componentes reutilizables con estado global en Zustand y navegación por stacks.',
    integrations: ['API REST propia', 'Notificaciones push con Expo', 'Almacenamiento local con AsyncStorage'],
    role: 'Mobile Developer — lideré la UI y la integración con la API.',
    responsibilities: ['Desarrollo de pantallas principales', 'Integración con API REST', 'Gestión de estado con Zustand', 'Publicación en stores'],
    technicalDecisions: ['Expo sobre bare RN por velocidad de iteración', 'Zustand sobre Redux por simplicidad'],
    methodology: 'Sprints de 2 semanas con revisión semanal con el cliente',
    versionControl: 'Git con ramas por feature y PRs revisados',
    testing: 'Testing manual en dispositivos físicos iOS y Android',
    metrics: ['Lanzada en App Store y Google Play', '4.2 estrellas promedio en reviews'],
    problemSolved: 'Dar acceso móvil a una plataforma que solo existía en web.',
    status: 'En producción',
    challenges: ['Compatibilidad entre iOS y Android en componentes nativos', 'Manejo de estado offline con sincronización automática'],
    learnings: ['Gestión de permisos nativos en distintas versiones de SO', 'Optimización de FlatList en listas largas'],
    repo: '#',
    demo: '#',
  },
  {
    image: 'cliente.png',
    title: 'Portal Cliente',
    description: 'Portal web para gestión de clientes.',
    date: 'Feb 2026',
    type: 'Laboral',
    client: 'Empresa interna',
    duration: '2 meses',
    teamSize: '3 personas',
    stack: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Spring Boot'],
    architecture: 'Frontend Angular con arquitectura modular por feature, backend Spring Boot en capas.',
    integrations: ['Spring Boot API', 'Auth con Keycloak', 'Exportación a PDF'],
    role: 'Frontend Lead — arquitecté el módulo de gestión y los flujos de navegación.',
    responsibilities: ['Arquitectura del frontend', 'Módulo de gestión de clientes', 'Integración con API de Spring Boot', 'Gestión de roles en UI'],
    technicalDecisions: ['Angular Material por consistencia con otros proyectos del equipo', 'Keycloak por requerimiento de empresa'],
    methodology: 'Scrum con sprints de 2 semanas y daily meetings',
    versionControl: 'Git Flow con feature branches y code review obligatorio',
    testing: 'Unit tests con Karma/Jasmine en servicios críticos',
    metrics: ['Reducción del 40% en tiempo de gestión administrativa', '3 módulos entregados a tiempo'],
    problemSolved: 'Reemplazar un proceso manual en Excel por un portal centralizado.',
    status: 'En producción',
    challenges: ['Sincronización en tiempo real entre múltiples usuarios', 'Sistema de permisos por rol sin complejidad en UI'],
    learnings: ['Uso avanzado de RxJS para combinar streams', 'Diseño de sistemas de roles que escalen'],
    repo: '#',
    demo: '#',
  },
  {
    image: 'ecommerce.png',
    title: 'E-Commerce',
    description: 'Tienda online con carrito y pagos integrados.',
    date: 'Jan 2026',
    type: 'Freelance',
    client: 'Tienda local',
    duration: '3 meses',
    teamSize: 'Solo',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    architecture: 'Full Stack con Next.js App Router, API Routes y Prisma como ORM.',
    integrations: ['Stripe para pagos', 'Webhooks de Stripe', 'Cloudinary para imágenes'],
    role: 'Desarrollador Full Stack — implementé el flujo completo de compra y la integración con Stripe.',
    responsibilities: ['Catálogo de productos', 'Carrito y checkout', 'Integración con Stripe', 'Panel de administración'],
    technicalDecisions: ['Next.js App Router por SSR nativo', 'Prisma sobre Drizzle por madurez del ecosistema'],
    methodology: 'Kanban con Trello, entregas semanales al cliente',
    versionControl: 'Git con main protegido y deploys automáticos en Vercel',
    testing: 'Tests E2E con Playwright para el flujo de compra',
    metrics: ['Tiempo de carga < 1.5s en mobile', 'Tasa de conversión 3.2% en primer mes'],
    problemSolved: 'Digitalizar las ventas de una tienda física sin infraestructura digital previa.',
    status: 'En producción',
    challenges: ['Consistencia entre stock y pedidos en concurrencia', 'Webhooks de Stripe confiables'],
    learnings: ['Transacciones atómicas con Prisma', 'Patrones de idempotencia para pagos sin duplicados'],
    repo: '#',
    demo: '#',
  },
  {
    image: 'gitea.png',
    title: 'Gitea',
    description: 'Servidor Git self-hosted con CI/CD.',
    date: 'Dec 2025',
    type: 'Proyecto personal',
    client: 'Uso propio',
    duration: '1 mes',
    teamSize: 'Solo',
    stack: ['Gitea', 'Docker', 'Nginx', 'Woodpecker CI', 'Linux'],
    architecture: 'Servidor self-hosted con Nginx como reverse proxy y Docker Compose para orquestación.',
    integrations: ['Woodpecker CI para pipelines', 'Nginx para HTTPS', 'Certbot para certificados'],
    role: 'DevOps — configuré el servidor, pipelines de CI/CD y políticas de acceso.',
    responsibilities: ['Instalación y configuración de Gitea', 'Setup de Nginx + HTTPS', 'Pipelines de CI/CD con Woodpecker', 'Backups automáticos'],
    technicalDecisions: ['Gitea sobre GitLab por menor consumo de recursos', 'Woodpecker por integración nativa con Gitea'],
    methodology: 'Implementación iterativa con documentación propia',
    versionControl: 'Git en el propio servidor Gitea',
    testing: 'Smoke tests manuales tras cada deploy de pipeline',
    metrics: ['100% uptime en 3 meses de operación', 'Pipelines ejecutan en < 2 minutos'],
    problemSolved: 'Tener control total del código fuente sin depender de GitHub ni servicios externos.',
    status: 'En producción',
    challenges: ['HTTPS con certificados propios en red interna', 'Pipelines en runners Docker aislados'],
    learnings: ['Administración de servidores Linux en producción', 'Diseño de pipelines CI/CD reproducibles'],
    repo: '#',
    demo: '#',
  },
  {
    image: 'nafa.png',
    title: 'Nafa',
    description: 'Web Site Administrable.',
    date: 'Aug 2025',
    type: 'Freelance',
    client: 'Nafa',
    duration: '2 meses',
    teamSize: 'Solo',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    architecture: 'CMS headless con panel admin separado del sitio público, API REST en Node.js.',
    integrations: ['Cloudinary para imágenes', 'MongoDB Atlas en la nube', 'Vercel para deploy'],
    role: 'Desarrollador Full Stack — desarrollé el CMS personalizado y el sitio público.',
    responsibilities: ['Sitio público con React', 'Panel de administración', 'API REST para el CMS', 'Sistema de uploads de imágenes'],
    technicalDecisions: ['CMS propio sobre WordPress por control total del diseño', 'MongoDB por flexibilidad en el modelo de contenido'],
    methodology: 'Entregas iterativas con feedback del cliente cada semana',
    versionControl: 'Git con deploys automáticos desde main',
    testing: 'Testing manual con el cliente en staging antes de cada release',
    metrics: ['El cliente gestiona el contenido 100% sin soporte técnico', 'Carga inicial < 2s'],
    problemSolved: 'Dar autonomía al cliente para actualizar su sitio sin conocimientos técnicos.',
    status: 'En producción',
    challenges: ['Editor de contenido intuitivo sin librerías pesadas', 'Optimización de imágenes cargadas por el admin'],
    learnings: ['Arquitectura de CMS headless a pequeña escala', 'Manejo de uploads y transformación de imágenes en servidor'],
    repo: '#',
    demo: '#',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

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
            src="drinkSit.png"
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

          {/* ── 03 Contexto — layout tipo SERVICES (imagen 3) ────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 gap-12">

              <div className="shrink-0 flex flex-col items-start">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  01
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Contexto
                </h2>
                <img
                  src="thinking3D.png"
                  alt="character"
                  className="w-28 md:w-36 object-contain select-none mt-4 self-center"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                {[
                  { label: 'Tipo', value: selected.type },
                  { label: 'Cliente', value: selected.client },
                  { label: 'Duración', value: selected.duration },
                  { label: 'Equipo', value: selected.teamSize },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-fourthColor)' }}
                  >
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--color-secondColor)' }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-base font-semibold"
                      style={{ color: 'var(--color-firstColor)' }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── 04 Stack ─────────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>

            {/* Header — mobile: columna | desktop: fila */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between pt-16 pb-12 gap-6 md:gap-12">

              {/* Mobile: número → personaje → título → descripción */}
              {/* Desktop: izq → número, título, descripción | der → personaje */}

              {/* Columna izquierda (texto) */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 order-1 md:order-1">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  02
                </span>

                {/* Personaje — solo visible en mobile, entre el número y el título */}
                <img
                  src="inComputer3D.png"
                  alt="character"
                  className="block md:hidden w-36 object-contain select-none"
                />

                <h2 className="text-3xl md:text-4xl font-bold">
                  <span style={{ color: 'var(--color-firstColor)' }}>Stack </span>
                  <span style={{ color: 'var(--color-secondColor)' }}>Tecnológico</span>
                </h2>
                <p
                  className="text-sm leading-7 max-w-sm"
                  style={{ color: 'var(--color-secondColor)' }}
                >
                  {selected.architecture}
                </p>
              </div>

              {/* Personaje — solo visible en desktop, columna derecha */}
              <img
                src="inComputer3D.png"
                alt="character"
                className="hidden md:block w-48 lg:w-60 object-contain select-none shrink-0 self-end order-2"
              />

            </div>

            {/* Grid de cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selected.stack.map((tech) => (
                <TechCard key={tech} tech={tech} />
              ))}
            </div>

          </section>

          {/* ── 05 Integraciones ─────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-center justify-around pt-16 gap-8 md:gap-12">

              {/* Izquierda — número + título (desktop) / centrado arriba (mobile) */}
              <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  03
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Integraciones
                </h2>
              </div>

              {/* Centro — timeline */}
              <div className="flex flex-col items-center md:items-start flex-1 w-full">
                {selected.integrations.map((item, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start w-full">

                    {/* Fila: círculo + texto */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">

                      {/* Círculo con ícono */}
                      <div
                        className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl"
                        style={{
                          backgroundColor: 'var(--color-thirdColor)',
                          border: '2px solid var(--color-secondColor)',
                        }}
                      >
                        <span>{integrationIcon(item)}</span>
                      </div>

                      {/* Texto */}
                      <div className="flex flex-col gap-1 text-center md:text-left pt-1">
                        <span
                          className="text-base font-bold leading-tight"
                          style={{ color: 'var(--color-firstColor)' }}
                        >
                          {integrationTitle(item)}
                        </span>
                        <span
                          className="text-sm leading-6"
                          style={{ color: 'var(--color-secondColor)' }}
                        >
                          {item}
                        </span>
                      </div>

                    </div>

                    {/* Línea conectora (no en el último) */}
                    {i < selected.integrations.length - 1 && (
                      <div
                        className="w-0.5 h-8 my-1 self-center md:self-start md:ml-7"
                        style={{ backgroundColor: 'var(--color-thirdColor)' }}
                      />
                    )}

                  </div>
                ))}
              </div>

              {/* Derecha — personaje (desktop) / centrado abajo (mobile) */}
              <div className="flex justify-center w-full md:w-auto shrink-0">
                <img
                  src="bothHands3D.png"
                  alt="character"
                  className="w-36 md:w-44 lg:w-52 object-contain select-none self-end"
                />
              </div>

            </div>
          </section>


          {/* ── 06 Mi Rol — numbered + lista (imagen 3) ──────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 gap-12">

              <div className="shrink-0 flex flex-col items-start">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  04
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Mi Rol
                </h2>
                <img
                  src="hoddie3D.png"
                  alt="character"
                  className="w-28 md:w-36 object-contain select-none mt-4 self-center"
                />
              </div>

              <div className="flex flex-col gap-6 flex-1">
                <p
                  className="text-base leading-7"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  {selected.role}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="p-6 rounded-2xl flex flex-col gap-3"
                    style={{ backgroundColor: 'var(--color-fourthColor)' }}
                  >
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--color-secondColor)' }}
                    >
                      Responsabilidades
                    </span>
                    <ul className="flex flex-col gap-2">
                      {selected.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-3 text-sm leading-6"
                          style={{ color: 'var(--color-firstColor)' }}
                        >
                          <span
                            className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: 'var(--color-secondColor)' }}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="p-6 rounded-2xl flex flex-col gap-3"
                    style={{ backgroundColor: 'var(--color-fourthColor)' }}
                  >
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--color-secondColor)' }}
                    >
                      Decisiones técnicas
                    </span>
                    <ul className="flex flex-col gap-2">
                      {selected.technicalDecisions.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-sm leading-6"
                          style={{ color: 'var(--color-firstColor)' }}
                        >
                          <span
                            className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: 'var(--color-secondColor)' }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ── 07 Proceso ───────────────────────────────────────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col items-center pt-16 gap-12">

              {/* Header */}
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  05
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Proceso
                </h2>
                <img
                  src="run3D.png"
                  alt="character"
                  className="w-24 md:w-32 object-contain select-none"
                />
              </div>

              {/* Timeline horizontal (desktop) / vertical (mobile) */}
              <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center">

                {[
                  { label: 'Metodología', value: selected.methodology,    icon: '📋', step: '01' },
                  { label: 'Versiones',   value: selected.versionControl, icon: '🔀', step: '02' },
                  { label: 'Testing',     value: selected.testing,        icon: '🧪', step: '03' },
                ].map(({ label, value, icon, step }, i, arr) => (
                  <div key={label} className="flex flex-col md:flex-row items-center w-full md:w-auto">

                    {/* Nodo */}
                    <div className="flex flex-col items-center gap-3 px-6 md:px-8 max-w-xs text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shrink-0 border-2"
                        style={{
                          backgroundColor: 'var(--color-fourthColor)',
                          borderColor: 'var(--color-secondColor)',
                        }}
                      >
                        {icon}
                      </div>
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: 'var(--color-secondColor)' }}
                      >
                        {step}
                      </span>
                      <span
                        className="text-base font-bold"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        {label}
                      </span>
                      <p
                        className="text-sm leading-6"
                        style={{ color: 'var(--color-secondColor)' }}
                      >
                        {value}
                      </p>
                    </div>

                    {/* Conector */}
                    {i < arr.length - 1 && (
                      <>
                        <div
                          className="hidden md:block h-0.5 w-16 shrink-0 self-start mt-8"
                          style={{ backgroundColor: 'var(--color-thirdColor)' }}
                        />
                        <div
                          className="block md:hidden w-0.5 h-10"
                          style={{ backgroundColor: 'var(--color-thirdColor)' }}
                        />
                      </>
                    )}

                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* ── 08 Resultados — cards con métricas (imagen 5) ────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 gap-12">

              <div className="shrink-0 flex flex-col items-start">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  06
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Resultados
                </h2>
                <img
                  src="jumpHappy.png"
                  alt="character"
                  className="w-28 md:w-36 object-contain select-none mt-4 self-center"
                />
              </div>

              <div className="flex flex-col gap-6 flex-1">
                <div
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-fourthColor)' }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase block mb-2"
                    style={{ color: 'var(--color-secondColor)' }}
                  >
                    Problema resuelto
                  </span>
                  <p
                    className="text-sm leading-7"
                    style={{ color: 'var(--color-firstColor)' }}
                  >
                    {selected.problemSolved}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {selected.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-3 px-6 py-4 rounded-2xl flex-1 min-w-[200px]"
                      style={{ backgroundColor: 'var(--color-thirdColor)' }}
                    >
                      <span style={{ color: 'var(--color-firstColor)' }} className="text-lg">◎</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl self-start"
                  style={{ backgroundColor: 'var(--color-fourthColor)' }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--color-secondColor)' }}
                  >
                    Estado actual
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-firstColor)' }}
                  >
                    {selected.status}
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* ── 09 Desafíos y Aprendizajes — grid (imagen 5) ─────────────── */}
          <section className="pb-24 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 gap-12">

              <div className="shrink-0 flex flex-col items-start">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  07
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Desafíos &<br />Aprendizajes
                </h2>
                <img
                  src="angrySit.png"
                  alt="character"
                  className="w-28 md:w-36 object-contain select-none mt-4 self-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div
                  className="p-6 rounded-2xl flex flex-col gap-3"
                  style={{ backgroundColor: 'var(--color-fourthColor)' }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--color-secondColor)' }}
                  >
                    Retos
                  </span>
                  <ul className="flex flex-col gap-3">
                    {selected.challenges.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-sm leading-6"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        <span
                          className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'var(--color-secondColor)' }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="p-6 rounded-2xl flex flex-col gap-3"
                  style={{ backgroundColor: 'var(--color-fourthColor)' }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--color-secondColor)' }}
                  >
                    Qué aprendí
                  </span>
                  <ul className="flex flex-col gap-3">
                    {selected.learnings.map((l) => (
                      <li
                        key={l}
                        className="flex items-start gap-3 text-sm leading-6"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        <span
                          className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'var(--color-secondColor)' }}
                        />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ── 10 Links — cards con imagen overlay (imagen 1) ───────────── */}
          <section className="pb-32 border-t" style={{ borderColor: 'var(--color-thirdColor)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 gap-12">

              <div className="shrink-0 flex flex-col items-start">
                <span
                  className="text-7xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'var(--color-thirdColor)' }}
                >
                  08
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ color: 'var(--color-firstColor)' }}
                >
                  Ver proyecto
                </h2>
                <img
                  src="lookUp.png"
                  alt="character"
                  className="w-28 md:w-36 object-contain select-none mt-4 self-center"
                />
              </div>

              <div className="flex flex-wrap gap-6 flex-1">

                {selected.repo && (
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 min-w-[240px] h-48 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: 'var(--color-fourthColor)' }}
                  >
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="relative flex flex-col justify-end h-full p-6">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: 'var(--color-secondColor)' }}
                      >
                        Código fuente
                      </span>
                      <span
                        className="text-lg font-bold"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        Repositorio →
                      </span>
                    </div>
                  </a>
                )}

                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 min-w-[240px] h-48 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: 'var(--color-thirdColor)' }}
                  >
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="relative flex flex-col justify-end h-full p-6">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: 'var(--color-secondColor)' }}
                      >
                        Demo en vivo
                      </span>
                      <span
                        className="text-lg font-bold"
                        style={{ color: 'var(--color-firstColor)' }}
                      >
                        Ver demo →
                      </span>
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

const integrationIconMap: Record<string, string> = {
  'jwt':            '🔑',
  'auth':           '🔐',
  'keycloak':       '🔐',
  'docker':         '🐳',
  'swagger':        '📄',
  'pdf':            '📄',
  'docs':           '📄',
  'expo':           '📱',
  'push':           '🔔',
  'notif':          '🔔',
  'async':          '💾',
  'storage':        '💾',
  'cloudinary':     '☁️',
  'cloud':          '☁️',
  'vercel':         '🚀',
  'deploy':         '🚀',
  'stripe':         '💳',
  'pago':           '💳',
  'webhook':        '🔗',
  'api':            '⚡',
  'rest':           '⚡',
  'spring':         '⚙️',
  'nginx':          '🌐',
  'web':            '🌐',
  'certbot':        '🔒',
  'https':          '🔒',
  'cert':           '🔒',
  'woodpecker':     '🔄',
  'ci':             '🔄',
  'mongodb':        '🗄️',
  'postgres':       '🗄️',
  'db':             '🗄️',
  'atlas':          '🗄️',
};

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

const techIcons: Record<string, string> = {
  'Angular':        '/Brayan/svg/angular.svg',
  'React':          '/Brayan/svg/reactjs-svgrepo-com.svg',
  'React Native':   '/Brayan/svg/reactjs-svgrepo-com.svg',
  'Next.js':        '/Brayan/svg/nextjs-icon.svg',
  'TypeScript':     '/Brayan/svg/typescript-svgrepo-com.svg',
  'Tailwind CSS':   '/Brayan/svg/tailwind-svgrepo-com.svg',
  'Spring Boot':    '/Brayan/svg/spring.svg',
  'Git':            '/Brayan/svg/git-svgrepo-com.svg',
  'Vite':           '/Brayan/svg/vitejs-svgrepo-com.svg',
  'Python':         '/Brayan/svg/python.svg',
  'Java':           '/Brayan/svg/java.svg',
  'CSS':            '/Brayan/svg/css-svgrepo-com.svg',
  'HTML':           '/Brayan/svg/file-type-html.svg',
  'Bash':           '/Brayan/svg/bash-icon.svg',
};

const techCategories: Record<string, string> = {
  'Angular':        'Frontend',
  'React':          'Frontend',
  'React Native':   'Mobile',
  'Next.js':        'Frontend',
  'TypeScript':     'Lenguaje',
  'Tailwind CSS':   'Estilos',
  'Spring Boot':    'Backend',
  'Node.js':        'Backend',
  'Express':        'Backend',
  'Python':         'Backend',
  'Java':           'Backend',
  'PostgreSQL':     'Base de datos',
  'MongoDB':        'Base de datos',
  'Prisma':         'ORM',
  'JWT':            'Auth',
  'Docker':         'DevOps',
  'Nginx':          'DevOps',
  'Linux':          'DevOps',
  'Git':            'Control de versiones',
  'Gitea':          'DevOps',
  'Woodpecker CI':  'CI/CD',
  'Swagger':        'Documentación',
  'Stripe':         'Pagos',
  'RxJS':           'Reactividad',
  'Zustand':        'Estado',
  'Expo':           'Mobile',
  'Cloudinary':     'Storage',
  'Keycloak':       'Auth',
  'Angular Material': 'UI',
  'REST API':       'API',
  'Vite':           'Bundler',
};

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
