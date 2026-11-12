import Link from "next/link";
import {
  Search,
  GraduationCap,
  FlaskConical,
  Cpu,
  History,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function FacultesPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-slate-300/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-slate-400/20 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative flex flex-col gap-6 p-6 w-full max-w-md mx-auto">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-blue-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <p className="text-sm font-semibold text-blue-600">Welcome</p>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Find your course in <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              seconds
            </span>
          </h1>
        </div>

        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
          <input
            type="text"
            placeholder="Search a module..."
            className="w-full pl-11 pr-4 py-3 bg-white/80 backdrop-blur border border-white rounded-2xl shadow-md outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="flex items-center gap-2 text-blue-700">
          <GraduationCap className="w-5 h-5" />
          <h2 className="font-semibold">Faculties</h2>
          <span className="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
            2
          </span>
        </div>

        
        
        <Link
          href="/exact-sciences"
          className="group flex items-center justify-between w-full bg-white/80 backdrop-blur border border-white rounded-2xl p-4 shadow-md transition hover:shadow-xl hover:-translate-y-1 hover:border-blue-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200">
             <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-gray-900">
              Exact Sciences and <br />
              computer science
            </h3>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
        </Link>

    
    
    
    
    <Link
          href="/science-technology"
          className="group flex items-center justify-between w-full bg-white/80 backdrop-blur border border-white rounded-2xl p-4 shadow-md transition hover:shadow-xl hover:-translate-y-1 hover:border-orange-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-lg shadow-orange-200">
              
               <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-gray-900">
              Science and <br />
              technology
            </h3>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />
    
    
    
    
    
    </Link>

        <div className="flex items-center gap-2 text-gray-700">
          <History className="w-5 h-5 text-orange-500" />
          <h2 className="font-semibold">Last search</h2>
        </div>

        <div className="rounded-2xl border border-dashed border-blue-200 bg-white/50 px-4 py-5 text-center text-sm text-gray-500">
          Your recent searches will appear here
        </div>
      </div>
    </main>
  );
}