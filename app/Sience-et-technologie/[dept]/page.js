'use client';
import { Suspense } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import {useParams,useRouter}from "next/navigation"

const semesters = [ 'Semestre 3', 'Semestre 4', 'Semestre 5', 'Semestre 6'];
const master = ['Semestre 1', 'Semestre 2', 'Semestre 3'];
const normalStyle = "flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50";

const selectedStyle = "flex items-center justify-between rounded-xl border border-blue-900 bg-blue-900 px-5 py-3 text-sm font-medium text-white";




  
 
 
 
 
  
  function DepartmentPageContent() {
    
 
 //important
    const [sem, setSem] = useState(0);
  const [level, setLevel] = useState('licence');

  const list = level === 'licence' ? semesters : master;

  
  const {dept} = useParams();
  const router = useRouter();
  
    
  const changeLevel = (value) => {
    setLevel(value);
    };
  
  
    async function opensemester(n) {
    const selection = 
    {
      faculter :"sience et Technologie" ,
      specialiter : dept ,
      Level : level,
      semester : n,

    }
    try
   {
    const res = await fetch('/api',
      {
     method :"POST",
     headers : {"Content-Type":"application/json"},
     body:JSON.stringify(selection)
    })
    
    
  }catch(error){
    console.log(error)
  }

   }
  
//important +++++ line 109
  
  
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-slate-50 to-blue-200 flex justify-center items-start sm:items-center  sm:p-6 ">
    
     <div className="w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-[0_20px_50px_-15px_rgba(30,58,138,0.25)] overflow-hidden mt-5 ">
        
        
        
        <div className="h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400" />
        <div className="p-5 sm:p-8">
         
          <Link
            href="/facultes_page"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue-800 transition rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            <ChevronLeft strokeWidth={1.75} className="w-4 h-4" />
            Back
          </Link>

          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-lg shadow-blue-200">
                <GraduationCap strokeWidth={1.5} className="w-6 h-6" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Choose your level
            </h1>
            </div>

            <div
              role="tablist"
              aria-label="Study level"
              className="inline-flex w-full sm:w-auto rounded-xl bg-slate-100 p-1 border border-slate-200"
            >
              {[
                { key: 'licence', label: 'Licence' },
                { key: 'master', label: 'Master' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={level === item.key}
                  onClick={() => changeLevel(item.key)}
                  className={`flex-1 sm:flex-none min-h-[40px] px-6 rounded-lg text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${
                    level === item.key
                      ? 'bg-blue-900 text-white shadow'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

         

          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {list.map((semester, i) => (
              <button
                key={semester}
                type="button"
                onClick={() =>{ setSem(i);
                opensemester(i+1);
                 
                  

                }}
               
               className={sem === i ? selectedStyle : normalStyle}
              >
                {semester}
                <ChevronRight
                  strokeWidth={1.75}
                  className={`w-5 h-5 transition group-hover:translate-x-1 ${
                    sem === i ? 'text-white' : 'text-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default function DepartmentPage(){
  return(
    <Suspense fallback={<div>loading...</div>}>
      <DepartmentPageContent />
    </Suspense>
  )
}