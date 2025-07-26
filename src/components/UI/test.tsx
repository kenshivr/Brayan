import React from "react";

const ColorPalette = () => {
  const colors = [
    { name: "Azul corporativo", hex: "#1E3F7F" },
    { name: "Rojo vibrante", hex: "#E74C3C" },
    { name: "Naranja energético", hex: "#F39C12" },
    { name: "Verde esmeralda", hex: "#2ECC71" },
    { name: "Negro elegante", hex: "#000000" },
    { name: "Dorado sofisticado", hex: "#D4AF37" },
    { name: "Gris neutro", hex: "#95A5A6" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Paleta de colores</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div key={color.hex} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md mb-2"
              style={{ backgroundColor: color.hex }}
            />
            <div className="text-center">
              <p className="font-medium text-sm">{color.name}</p>
              <p className="text-xs text-gray-600">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Combinaciones sugeridas</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex">
              <div className="w-12 h-12 rounded-l" style={{ backgroundColor: "#1E3F7F" }} />
              <div className="w-12 h-12" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="w-12 h-12 rounded-r" style={{ backgroundColor: "#000000" }} />
            </div>
            <span className="ml-4 text-sm">Corporativa (Azul + Blanco + Negro)</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex">
              <div className="w-12 h-12 rounded-l" style={{ backgroundColor: "#D4AF37" }} />
              <div className="w-12 h-12" style={{ backgroundColor: "#000000" }} />
              <div className="w-12 h-12 rounded-r" style={{ backgroundColor: "#2ECC71" }} />
            </div>
            <span className="ml-4 text-sm">Premium (Dorado + Negro + Verde)</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex">
              <div className="w-12 h-12 rounded-l" style={{ backgroundColor: "#E74C3C" }} />
              <div className="w-12 h-12" style={{ backgroundColor: "#1E3F7F" }} />
              <div className="w-12 h-12 rounded-r" style={{ backgroundColor: "#FFFFFF" }} />
            </div>
            <span className="ml-4 text-sm">Vibrante (Rojo + Azul + Blanco)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;