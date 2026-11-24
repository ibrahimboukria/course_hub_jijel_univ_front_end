import Link from "next/link";
import { Home } from "lucide-react";

export default function Head() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-900/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
       
        <div className="flex min-w-0 flex-col font-bold leading-tight text-white sm:flex-row sm:items-center sm:gap-4">
          <span className="truncate text-base sm:text-lg">
            Esperanza <span className="text-orange-400">Club</span>
          </span>
          <span className="truncate text-xs text-green-400 sm:text-lg">
            Jijel univ
          </span>
        </div>

        
        <Link
          href="/facultes_page"
          aria-label="Home"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 font-medium text-white transition-colors hover:bg-white/10 hover:text-orange-400"
        >
          <Home size={20} />
          <span className="hidden sm:inline">HOME</span>
        </Link>
      </nav>
    </header>
  );
}