import cn from "@src/services/clsx"

export default function Light() {
    return (
        <>
            <div
                className={cn(
                    'w-[200vh] h-[50vw]',
                    'transition-opacity duration-800 ease-in-out',
                    'rotate-90 origin-top-left',
                    'absolute -top-2/2 left-6/6',
                )}
                style={{
                    background: `conic-gradient(from 0deg, var(--color-fifthColor) 0deg, var(--color-secondColor) 180deg, transparent 180deg, transparent 360deg)`,
                }}
            />
            <div
                className={cn(
                    'w-[200vh] h-[50vw]',
                    'transition-opacity duration-800 ease-in-out',
                    'rotate-90 origin-top-left',
                    'absolute -top-2/2 left-3/6',
                )}
                style={{
                    background: `conic-gradient(from 0deg, var(--color-secondColor) 0deg, var(--color-fifthColor) 180deg, transparent 180deg, transparent 360deg)`,
                }}
            />
        </>
    )
}
