import { Github, Linkedin, Moon } from "lucide-react";
export function HeroSidebar() {
    return (
        <aside className="hidden lg:flex w-[30%] min-h-screen bg-[var(--surface)] flex-col justify-between px-10 py-16">
            <div className="flex flex-col gap-10">
                <nav>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <button className="text-left text-[var(--text)] text-lg hover:translate-x-2 transition-all duration-300">Sobre Mim</button>
                        </li>
                        <li>
                            <button className="text-left text-[var(--muted)] text-lg hover:translate-x-2 hover:text-[var(--text)] transition-all duration-300">Projetos</button>
                        </li>
                        <li>
                            <button className="text-left text-[var(--muted)] text-lg hover:translate-x-2 hover:text-[var(--text)] transition-all duration-300">Experiência</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <a href="https://github.com/maclartech" target="_blank" className="text-[var(--muted)] hover:text-[var(--text)] transition-all duration-300"><Github size={22} /></a>
                    <a href="https://www.linkedin.com/in/maclartech" target="_blank" className="text-[var(--muted)] hover:text-[var(--text)] transition-all duration-300"><Linkedin size={22} /></a>
                </div>

                <button className="text-[var(--muted)] hover:text-[var(--text)] transition-all duration-300"><Moon size={22} /></button>
            </div>
        </aside>
    )
}
