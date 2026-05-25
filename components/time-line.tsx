"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataAboutPage } from "@/data";

const TimeLine = () => {
  const [filter, setFilter] = useState<"todos" | "experiencia" | "educacion" | "certificaciones">("todos");

  const categories = [
    { id: "todos", label: "Todos", icon: "🌐" },
    { id: "experiencia", label: "Experiencia", icon: "💼" },
    { id: "educacion", label: "Educación", icon: "🎓" },
    { id: "certificaciones", label: "Certificaciones", icon: "📜" },
  ];

  const filteredData = dataAboutPage.filter(
    (item) => filter === "todos" || item.category === filter
  );

  return (
    <div className="flex flex-col justify-center my-8">
      {/* Selector de Filtros Glassmórfico */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto bg-slate-900/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800/80 shadow-lg">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`relative flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl cursor-pointer transition-all duration-300 ${
              filter === cat.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-3xl mx-auto md:pb-28">
        <div className="relative min-h-[300px]">
          {/* Línea conectora de fondo fija en pantallas grandes */}
          <div className="absolute left-2 sm:left-[6.5rem] top-3 bottom-3 w-px bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="-my-6">
            <AnimatePresence mode="popLayout">
              {filteredData.length > 0 ? (
                filteredData.map((data) => (
                  <motion.div
                    key={data.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="relative py-6 pl-8 sm:pl-32 group"
                  >
                    <h3 className="mb-1 text-lg sm:text-xl font-bold text-white sm:mb-0">
                      {data.title}
                    </h3>
                    
                    <div
                      className="flex flex-col sm:flex-row items-start mb-1 
                                              before:absolute before:left-2 sm:before:left-0 before:h-full
                                              before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] 
                                              before:self-start before:-translate-x-1/2 
                                              before:translate-y-3 after:absolute after:left-2 
                                              sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 
                                              after:border-4 after:box-content after:border-slate-900 
                                              after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                              after:translate-y-1.5 sm:before:hidden"
                    >
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-[10px] font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-full">
                        {data.date}
                      </time>
                      <div className="text-sm sm:text-base font-semibold text-blue-400">
                        {data.subtitle}
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-300 max-w-xl leading-relaxed mt-2">
                      {data.description}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 text-slate-400"
                >
                  No hay elementos en esta categoría.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
