import cn from "@src/services/clsx"

export default function LightComplement() {
    return (
        <>
            <div
                className={cn(
                    'w-screen h-screen',
                    'absolute -bottom-2/2',
                    'transition-opacity duration-800 ease-in-out',
                )}
                style={{
                    background: 'linear-gradient(to bottom, #9A99A2, var(--color-fifthColor))',
                }}
            />
        </>
    )
}
