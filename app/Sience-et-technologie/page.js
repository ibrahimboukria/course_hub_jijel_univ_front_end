import Link from "next/link"
import { Laptop, Atom, Sigma, ChevronRight, ArrowLeft } from "lucide-react"

export default function ST(){
    const Specialites = [
        {
            name: "Telecom",
            href: "Sience-et-technologie/TL",
            icon: Laptop,
            color: "from-blue-500 to-green-600",
            shadow: "shadow-violet-200",
        },
        {
            name: "automatic",
            href: "Sience-et-technologie/AT",
            icon: Laptop,
            color: "from-violet-500 to-purple-600",
            shadow: "shadow-violet-200",
        },
        {
            name: "Electronic",
            href: "Sience-et-technologie/ELC",
            icon: Laptop,
            color: "from-fuchsia-500 to-pink-600",
            shadow: "shadow-fuchsia-200",
        },
        {
            name: "Genie civil",
            href: "Sience-et-technologie/GC",
            icon: Laptop,
            color: "from-orange-500 to-red-600",
            shadow: "shadow-orange-200",
        },
        {
            name: "Genie mecanique",
            href: "Sience-et-technologie/GM",
            icon: Laptop,
            color: "from-slate-500 to-zinc-700",
            shadow: "shadow-slate-300",
        },
        {
            name: "Architecture",
            href: "Sience-et-technologie/Architecture",
            icon: Laptop,
            color: "from-teal-500 to-emerald-600",
            shadow: "shadow-teal-200",
        },
        {
            name: "Genie des Procedes",
            href: "Sience-et-technologie/GP",
            icon: Laptop,
            color: "from-cyan-500 to-sky-600",
            shadow: "shadow-cyan-200",
        },
        {
            name: "Electrotechnique",
            href: "Sience-et-technologie/Electrotechnique",
            icon: Laptop,
            color: "from-yellow-400 to-amber-500",
            shadow: "shadow-yellow-200",
        },
        
        
    ]

    return(
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-3 sm:p-6">
      <div className="fade-up w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8">

        <Link
          href="/facultes_page"
          className="group inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-700 transition mb-4"
        >
          <ArrowLeft className="w-4 h-4 transition group-hover:-translate-x-1" />
          Back to faculties
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
          Science and technology
        </h1>
        <p className="text-sm text-slate-500 mb-6">Choose your department</p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">

          <div className="sm:w-44 shrink-0">
            <h2 className="text-sm font-semibold text-slate-500 mb-3">First year</h2>
            <Link className="fade-up group flex flex-col items-center gap-3 bg-white border border-slate-200 rounded-2xl p-5 shadow-md shadow-green-200 hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg transition duration-300"
            href="/ST1"
            style={{ animationDelay: "150ms" }}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Atom className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">L1 ST</h1>
            </Link>
          </div>

          <div className="hidden sm:block w-px bg-slate-200" />

          <div className="flex-1">
  <h2 className="text-sm font-semibold text-slate-500 mb-3">Specialites</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {Specialites.map((spe,index) => (
      <Link
        key={index}
        href={spe.href}
        style={{ animationDelay: `${250 + index * 120}ms` }}
        className={`fade-up group flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-md ${spe.shadow} hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg transition duration-300`}

      >
        <div className={`bg-gradient-to-br ${spe.color} p-3 rounded-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
          <spe.icon className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">{spe.name}</h1>
        <ChevronRight className="ml-auto w-5 h-5 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
      </Link>
    ))}
  </div>
</div>

        </div>
      </div>
    </main>
    )
}