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
                    background: 'linear-gradient(to bottom, #939198, var(--color-fifthColor))',
                }}
            />
        </>
    )
}
