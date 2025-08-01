import cn from "@src/services/clsx";
import type { ReactNode } from "react";
import { Link } from 'react-router-dom';
import image from "@public/thinking3D.png";

export default function NotFound() {
  return (
    <Content>

      <Title />

      <Image />

      <Buttons />

    </Content>
  );
}

function Content({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={cn(
      'text-center mt-10 gap-6',
      'flex flex-col items-center justify-center',
    )}>
      {children}
    </div>
  );
}

function Title() {
  return (
    <p className="text-7xl">
      Page not found
    </p>
  )
}

function Image() {
  return (
    <div
      className={cn(
        'relative w-full',
        'flex flex-col justify-center items-center',
      )}
    >

      <img
        src={image}
        width={300}
        alt="Personaje"
        className="z-10"
      />

      <span
        className={cn(
          'absolute inset-0 z-0 text-[38vw]',
          'flex justify-center items-center',
        )}
      >
        404
      </span>

    </div>
  )
}

function Buttons() {
  return (
    <div className="flex gap-4 z-10">
      <Link
        to="/"
        className="px-4 py-2 rounded"
        style={{
          color: 'var(--color-fifthColor)',
          backgroundColor: 'var(--color-firstColor)'
        }}
      >
        Ir al Inicio
      </Link>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 rounded border border-gray-400"
        style={{
          borderWidth: '1px',
          color: 'var(--color-firstColor)',
          backgroundColor: 'var(--color-fifthColor)'
        }}
      >
        Regresar
      </button>
    </div>
  )
}