// src/pages/notFound.tsx
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">
        No encontramos la ruta: <span className="font-mono text-red-500">{location.pathname}</span>
      </p>
      <p className="text-gray-500 mb-6">
        Verifica la URL o vuelve al inicio.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Ir al Inicio
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
