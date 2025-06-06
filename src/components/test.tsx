// src/components/DashboardUI.tsx

import React from 'react';

const DashboardUI = () => {
  return (
    <div className="w-full h-screen bg-neutral-900 text-white flex p-4 gap-4 font-sans">
      {/* Sidebar */}
      <aside className="w-1/5 bg-neutral-800 rounded-3xl p-4 flex flex-col gap-6 items-center">
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-xl"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-xl"></div>
        <div className="w-10 h-10 bg-gray-600 rounded-xl"></div>
        <div className="mt-auto flex flex-col gap-4">
          <button className="text-sm">EN</button>
          <button className="text-sm">RU</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-neutral-800 rounded-3xl p-6 relative overflow-hidden">
        {/* Imagen central estilo anime */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-cover bg-center rounded-3xl" style={{ backgroundImage: "url('/images/anime-bg.jpg')" }}></div>

        <div className="relative z-10 flex flex-col gap-6">
          <nav className="flex gap-8 text-lg font-semibold">
            <a href="#">ANIME</a>
            <a href="#">MANGA</a>
            <a href="#">MERCH</a>
          </nav>

          <section className="flex justify-between items-center">
            <div className="text-6xl font-bold leading-tight">
              <p>NEW EPISODE</p>
              <p className="text-red-400">21 FEB</p>
            </div>

            <div className="w-48 h-32 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <button className="bg-red-500 w-12 h-12 rounded-full text-white">▶</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardUI;
