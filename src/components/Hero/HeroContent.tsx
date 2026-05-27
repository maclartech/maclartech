import { HeroImage } from "./HeroImage";

export function HeroContent() {
    return (
        <div className="relative overflow-hidden w-full lg:w-[70%] min-h-screen flex items-center justify-center px-8 lg:px-20 bg-[var(--background)]">
            <HeroImage />

            <div className="max-w-2x1 space-y-6">
                <span className="text-sm tracking-[0.3em] uppercase text-[var(--primary)]">Desenvolvedora Full Stack</span>
                <h1 className="text-5x1 lg:text-7x1 font-bold leading-tight text-[var(--text)]">Maria Clara Carvalho</h1>
                <p className="text-lg leading-relaxed text-[var(--muted)]">Transformando problemas em solução e experiência.</p>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-[var(--muted)]">Atualemente focada em React, Next.js e TypeScript.</span>
                </div>
            </div>
        </div>
    )
}