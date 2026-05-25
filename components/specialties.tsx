"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transition";

const Specialties = () => {
  const specialties = [
    {
      icon: "📈",
      title: "Ciencias de Datos",
      skills: [
        "Machine Learning - Modelos predictivos de regresión y clasificación",
        "Análisis Estadístico - Inferencia, hipótesis y modelado",
        "Deep Learning - Redes neuronales y análisis de patrones (Tensorflow, PyTorch)",
        "Data Mining - Extracción de conocimiento de grandes datasets",
        "Análisis Predictivo - Forecasting y series temporales",
      ],
    },
    {
      icon: "📊",
      title: "Análisis de Datos",
      skills: [
        "Business Intelligence - KPIs, dashboards y reportería",
        "Análisis Exploratorio - EDA y descubrimiento de patrones",
        "Visualización de Datos - Storytelling con datos",
        "A/B Testing - Experimentación y optimización",
        "SQL Avanzado - Consultas complejas y optimización",
      ],
    },
    {
      icon: "💻",
      title: "Desarrollo Web",
      skills: [
        "Frontend Skills - Next.js, React, Angular, TypeScript, JavaScript",
        "Backend Skills - Node.js, Express, Django",
        "API Development - Endpoints para servir modelos ML (TensorFlow.js, FastAPI)",
        "Dashboard Creation - Interfaces para presentar análisis (Streamlit, Dash)",
        "Database Management - SQL y NoSQL (Oracle, MySQL, PostgreSQL, MongoDB, Firebase)",
      ],
    },
  ];

  return (
    <div className="pt-16 pb-20 px-6 relative z-0 bg-gradient-to-b from-black/20 via-black/80 to-black">
      <motion.div
        variants={fadeIn("bottom")}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-16 text-blue-500 md:text-5xl">
          Mis Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={fadeIn("bottom")}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{specialty.icon}</div>
                  <h3 className="text-xl font-bold text-blue-400">
                    {specialty.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {specialty.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-slate-300 leading-relaxed">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack Tecnológico Showcase */}
        <motion.div
          variants={fadeIn("bottom")}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-20 mb-10 text-center"
        >
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 tracking-tight">
              Stack Tecnológico Principal
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-blue-500/20 transition-colors">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Lenguajes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "R", "JavaScript", "TypeScript", "PHP"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:text-white hover:bg-slate-800 rounded-md transition-colors border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-blue-500/20 transition-colors">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Análisis de Datos
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Pandas", "NumPy", "SciKit-Learn", "Kedro", "Jupyter"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:text-white hover:bg-slate-800 rounded-md transition-colors border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-blue-500/20 transition-colors">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  ML / MLOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "MLflow", "Keras", "Azure AI"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:text-white hover:bg-slate-800 rounded-md transition-colors border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-blue-500/20 transition-colors">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Visualización / BI
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Tableau", "Streamlit", "Plotly", "Matplotlib"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:text-white hover:bg-slate-800 rounded-md transition-colors border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-blue-500/20 transition-colors">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Idiomas & Agilidad
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Inglés (B2)", "Scrum", "DevOps", "CRISP-DM", "Git", "Docker"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-bold text-slate-300 bg-slate-850 border border-slate-700/60 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Specialties;
