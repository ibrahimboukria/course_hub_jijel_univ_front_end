import Link from "next/link";
import { Laptop, Atom, Sigma, ChevronRight, ArrowLeft } from "lucide-react";

const SUBJECTS = [
  {
    name: "Computer science",
    href: "/IT",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-200",
  },
  {
    name: "Physique",
    href: "/physique",
    icon: Atom,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-200",
  },
  {
    name: "Math",
    href: "/math",
    icon: Sigma,
    color: "from-orange-400 to-rose-500",
    shadow: "shadow-orange-200",
  },
];

export default function Exactseince() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-3 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8">
        
        
        
        <Link
          href="/facultes_page"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-700 transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to faculties
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          Exact Sciences
        </h1>
        <p className="text-sm text-slate-500 mb-6">Choose your department</p>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3">
          
          
          
          {SUBJECTS.map(({ name, href, icon: Icon,color,shadow }) =>(
          <Link
              key={href} href={href}
              className={`group relative flex sm:flex-col items-center gap-4 sm:gap-3 rounded-2xl bg-gradient-to-br ${color} text-white p-4 sm:p-6 shadow-lg ${shadow} transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <span className="shrink-0 p-2.5 rounded-xl bg-white/20">
                <Icon size={32} strokeWidth={1.75} />
              </span>
              
              
              <span className="flex-1 sm:flex-none text-base font-medium sm:text-center">{name}
               
              </span>
              <ChevronRight className="sm:hidden w-5 h-5 opacity-80 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}