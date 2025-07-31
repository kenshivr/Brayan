import { useFontStore } from '@src/context/fontStore';

export default function FontSelector() {
    const fonts = [
        'agneos_outline',
        'agneos_regular',
        'aventi',
        'quloon',
        'slabion',
        'falling',
    ] as const;

    const { setFont, activeFont } = useFontStore();

    return (
        <div className="flex flex-col gap-2">
            {fonts.map((font) => (
                <button
                    key={font}
                    onClick={() => setFont(font)}
                    className={activeFont === font ? 'underline' : ''}
                >
                    {font}
                </button>
            ))}
        </div>
    );
};
