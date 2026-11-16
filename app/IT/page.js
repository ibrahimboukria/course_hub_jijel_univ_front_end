'use client'
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  Code2,
  Percent,
  Cpu,
  Globe,
  Zap,
  Sigma,
  Download,
  Atom,
} from "lucide-react";


const semesters = ["Semestre 1", "Semestre 2", "Semestre 3", "Semestre 4", "Semestre 5", "Semestre 6"];
const master = ["Semestre 1", "Semestre 2", "Semestre 3", "Semestre 4"];



export default function DepartmentPage() {
    const [sem,setsem]=useState(0);
    const [level, setLevel] = useState("licence");
  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-wrap items-center  justify-between gap-4">
          <div className="flex items-center gap-3">
           
            <div>
              <p className="text-xs text-slate-500">Département</p>
              <h1 className="text-2xl font-bold">Informatique</h1>
            </div>
          </div>

          <div className="flex gap-2  rounded-lg bg-slate-200 p-1">
            <button  className="rounded-md bg-white px-4 py-1 text-sm font-medium">
              Licence
            </button>
           
            <button className="rounded-md px-4 py-1 text-sm text-slate-500">
              Master
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">

          <div className="flex flex-row flex-wrap gap-2 rounded-xl bg-white p-2 lg:w-56 lg:flex-col lg:self-start">
            {semesters.map((semester, index) => (
              <button
            key={index}
                className="rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100"
                onClick={()=>setsem(index)}
              >
                {semester}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{semesters[sem]}</h2>
              <p className="text-xs text-indigo-600">6 modules</p>
            </div>

            
              
            </div>
          </div>

        </div>
      
    </main>
  );
}