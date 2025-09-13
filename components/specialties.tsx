"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transition";

const Specialties = () => {
  const specialties = [
    {
      icon: "📈",
      title: "Ciencia de Datos",
      skills: [
        "Machine Learning - Modelos predictivos y clasificación",
        "Análisis Estadístico - Inferencia, hipótesis y modelado",
        "Deep Learning - Redes neuronales y análisis de patrones",
        "Data Mining - Extracción de conocimiento de grandes datasets",
        "Análisis Predictivo - Forecasting y series temporales"
      ]
    },
    {
      icon: "📊",
      title: "Análisis de Datos",
      skills: [
        "Business Intelligence - KPIs, dashboards y reportería",
        "Análisis Exploratorio - EDA y descubrimiento de patrones",
        "Visualización de Datos - Storytelling con datos",
        "A/B Testing - Experimentación y optimización",
        "SQL Avanzado - Consultas complejas y optimización"
      ]
    },
    {
      icon: "💻",
      title: "Desarrollo Web",
      skills: [
        "Frontend Skills - Next.js, React, Angular, TypeScript, JavaScript",
        "Backend Skills - Node.js, Express, Django",        
        "API Development - Endpoints para servir modelos ML (TensorFlow.js, FastAPI)",
        "Dashboard Creation - Interfaces para presentar análisis (Streamlit, Dash)",
        "Database Management - SQL y NoSQL (Oracle, MySQL, PostgreSQL, MongoDB, Firebase)"
      ]
    }
  ];

  return (
    <div className="py-20 px-6 relative z-10">
      <motion.div
        variants={fadeIn("bottom")}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
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
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <h3 className="text-xl font-bold text-blue-400">{specialty.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {specialty.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-300">
                    <span className="text-blue-400 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("bottom")}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-16 mb-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Stack Tecnológico Principal</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Lenguajes</h4>
                <p className="text-gray-300">Python, SQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Análisis</h4>
                <p className="text-gray-300">Pandas, NumPy, SciKit Learn</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">ML Frameworks</h4>
                <p className="text-gray-300">TensorFlow, PyTorch</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Visualización</h4>
                <p className="text-gray-300">Matplotlib, Seaborn, Plotly</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Specialties;