import Link from "next/link"
import { Laptop, Atom, Sigma, ChevronRight, ArrowLeft } from "lucide-react"

export default function ST(){
    const Specialites = [
        {
            name: "Telecom",
            href: "Sience-et-technologie/TL",
            icon: Laptop,
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200",
        },
        {
            name: "Telecom",
            href: "Sience-et-technologie/TL",
            icon: Laptop,
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200",
        },
        {
            name: "Telecom",
            href: "Sience-et-technologie/TL",
            icon: Laptop,
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200",
        },
        {
            name: "Telecom",
            href: "Sience-et-technologie/TL",
            icon: Laptop,
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200",
        },
        
    ]

    return(
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
          Science and technology
        </h1>
        <p className="text-sm text-slate-500 mb-6">Choose your department</p>

        <div className="flex gap-10">

          <div>
            <Link className="flex flex-col items-center gap-3 bg-white border border-slate-200 rounded-2xl p-5 hover:bg-green-50"
            href="/ST1"
            >
              <div className="bg-green-500 p-3 rounded-xl">
                <Atom className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">L1 ST</h1>
            </Link>
          </div>

          <div>
  <h1>Specialites</h1>

  <div className="flex flex-wrap gap-4">
    {Specialites.map((spe,index) => (
      <Link
        key={index}
        href={spe.href}
        className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:bg-blue-50"

      >
        <div className="bg-blue-500 p-3 rounded-xl">
          <spe.icon className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">{spe.name}</h1>
      </Link>
    ))}
  </div>
</div>

        </div>
      </div>
    </main>
    )
}