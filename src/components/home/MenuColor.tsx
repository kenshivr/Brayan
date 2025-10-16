import { useState, useEffect } from "react";
import { useThemeStore } from "@src/context/themeStore";
import { HexColorPicker, HexColorInput } from "react-colorful";

const CSS_VARS = [
    "--color-firstColor",
    "--color-secondColor",
    "--color-thirdColor",
    "--color-fourthColor",
    "--color-fifthColor",
];

interface MenuColorProps {
    onCancel: () => void;
    onSave?: () => void;
}

export default function MenuColor({ onCancel, onSave }: MenuColorProps) {
    const addTheme = useThemeStore((s) => s.addTheme);
    const setPalette = useThemeStore((s) => s.setPalette);
    const selectedPalette = useThemeStore((s) => s.selectedPalette);

    const [colors, setColors] = useState<Record<string, string>>({});
    const [paletteName, setPaletteName] = useState("");

    const loadCSSColors = () => {
        const currentColors: Record<string, string> = {};
        CSS_VARS.forEach((name) => {
            const val = getComputedStyle(document.documentElement)
                .getPropertyValue(name)
                .trim();
            currentColors[name] = val || "#ffffff";
        });
        setColors(currentColors);
    };

    // Cargar colores iniciales y cada vez que cambia la paleta seleccionada
    useEffect(() => {
        loadCSSColors();
    }, [selectedPalette]);

    const handleColorChange = (varName: string, newColor: string) => {
        setColors((prev) => ({ ...prev, [varName]: newColor }));
        document.documentElement.style.setProperty(varName, newColor);
    };

    const handleSave = () => {
        const trimmedName = paletteName.trim();
        if (!trimmedName) {
            alert("Debes ingresar un nombre para la nueva paleta");
            return;
        }

        const newPalette = {
            firstColor: colors["--color-firstColor"],
            secondColor: colors["--color-secondColor"],
            thirdColor: colors["--color-thirdColor"],
            fourthColor: colors["--color-fourthColor"],
            fifthColor: colors["--color-fifthColor"],
        };

        addTheme(trimmedName, newPalette);
        setPalette(trimmedName); // ✅ aplicar paleta
        onSave?.(); // ✅ cerrar diálogo
    };

    return (
        <div
            className="flex flex-col gap-6 p-4 w-full"
        >
            <input
                type="text"
                value={paletteName}
                placeholder="Nombre Paleta"
                className="border px-3 py-2 rounded w-full"
                onChange={(e) => setPaletteName(e.target.value)}
            />

            {CSS_VARS.every((v) => colors[v]) &&
                CSS_VARS.map((varName) => (
                    <div
                        key={varName}
                        className="flex flex-col items-center justify-center border rounded-xl p-4 shadow-sm bg-white/5"
                    >
                        <span className="text-sm font-medium mb-2">
                            {varName.replace("--color-", "").replace("Color", " Color")}
                        </span>

                        <HexColorInput
                            prefixed
                            color={colors[varName]}
                            onChange={(val: any) => handleColorChange(varName, val)}
                            className="border rounded px-2 py-1 w-32 text-center"
                        />

                        <HexColorPicker
                            color={colors[varName]}
                            onChange={(val: any) => handleColorChange(varName, val)}
                            className="mt-3 w-full"
                        />
                    </div>
                ))}

            <div className="flex flex-col gap-2">
                <button
                    onClick={onCancel}
                    style={{
                        backgroundColor: "var(--color-fifthColor)",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--color-fourthColor)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--color-fifthColor)")
                    }
                    className="px-4 py-2 rounded"
                >
                    Cancelar
                </button>
                <button
                    onClick={handleSave}
                    style={{
                        backgroundColor: "var(--color-fifthColor)",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--color-fourthColor)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--color-fifthColor)")
                    }
                    className="px-4 py-2 rounded"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}
