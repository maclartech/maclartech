export function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800">
      <div className="max-w-6x1 mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Maria Clara Carvalho</h1>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}