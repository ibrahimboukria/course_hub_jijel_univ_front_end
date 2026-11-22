'use client';
import ParallaxBg from "./parallaxBg";
import Link from "next/link";
import DotGrid from "./DotGrid"
import { useState } from "react";
import {
  GraduationCap,
  Sparkles,
  Star,
  Atom,
  BookOpen,
  Cpu,
  FlaskConical,
  ChevronRight,
  Zap,
} from "lucide-react";

const floating = [
  { Icon: Star, style: "top-[8%] left-[10%]", delay: "0s", size: "w-8 h-8" },
  { Icon: Atom, style: "top-[20%] right-[8%]", delay: "1s", size: "w-12 h-12" },
  { Icon: BookOpen, style: "bottom-[15%] left-[6%]", delay: "2s", size: "w-10 h-10" },
  { Icon: GraduationCap, style: "bottom-[10%] right-[12%]", delay: "3s", size: "w-12 h-12" },
  { Icon: Star, style: "top-[50%] left-[3%]", delay: "4s", size: "w-6 h-6" },
  { Icon: Star, style: "top-[60%] right-[4%]", delay: "5s", size: "w-7 h-7" },
  { Icon: Star, style: "top-[5%] right-[30%]", delay: "1.5s", size: "w-9 h-9" },
{ Icon: BookOpen, style: "top-[35%] left-[5%]", delay: "2.5s", size: "w-12 h-12" },
{ Icon: Atom, style: "bottom-[30%] right-[3%]", delay: "3.5s", size: "w-10 h-10" },
{ Icon: Star, style: "bottom-[5%] left-[35%]", delay: "0.5s", size: "w-8 h-8" },
];

const faculties = [
  {
    href: "/exact-sciences",
    title: "Exact science and computer science",
    icon: Cpu,
    color: "from-blue-500 to-indigo-600",
  },
  {
    href: "/Sience-et-technologie",
    title: "Science and Technology",
    icon: FlaskConical,
    color: "from-orange-400 to-rose-500",
  },
  {
    href: "/Medecine",
    title: "Medecine",
    icon: Zap,
    color: "from-rose-400 to-green-500",
  },
];








export default function FacultesPage() {
  const[query,setquery]=useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 p-4 pt-24 sm:p-8 sm:pt-28   flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
  <ParallaxBg />
  <DotGrid />


      
<div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-500/40 blur-3xl" />
<div className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-orange-400/30 blur-3xl" />
<div className="pointer-events-none absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-sky-500/30 blur-3xl" />
      
      {floating.map(({ Icon, style, delay, size }, i) => (
        <Icon
          key={i}
          className={`float absolute ${style} ${size} text-indigo-400/50 pointer-events-none`}
          style={{ animationDelay: delay }}
        />
      ))}

      <div className="fade-up relative z-10 w-full max-w-4xl overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
        <div className="relative flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/70 backdrop-blur">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <p className="text-sm font-semibold text-blue-600">Welcome</p>
            </div>
            <div className="relative z-10 flex shrink-0 justify-center w-full">
  <img
    src="/espy.png"
    alt="Esperanza Club"
    className="drift w-64 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
  />
</div>

           
           
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Find your course in <br />
              <span className="gradient-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
                seconds
              </span>
            </h1>
          </div>

          
          
          
          <div id="faculties" className="flex items-center gap-2 text-blue-700">
            <GraduationCap className="w-5 h-5" />
            <h2 className="font-semibold">Faculties</h2>
            <span className="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              {faculties.length}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {faculties.map(({ href, title, icon: Icon, color }, i) => (
              <Link
                key={title}
                href={href}
                style={{ animationDelay: `${300 + i * 150}ms` }}
                className="fade-up group flex flex-col items-center justify-center gap-4 text-center min-h-64 bg-white/80 backdrop-blur border border-white rounded-2xl p-6 shadow hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${color} text-white shadow transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-medium text-gray-900">{title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 transition duration-300 group-hover:translate-x-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}