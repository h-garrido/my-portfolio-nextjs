"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import MotionTransition from "./transition-component";

const certificationsData = [
  {
    id: 1,
    title: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft Azure",
    date: "Agosto 2025",
    description: "Competencias fundamentales en conceptos de datos, servicios de datos relacionales y no relacionales en Microsoft Azure.",
    credlyUrl: "https://www.credly.com/badges/dacf5167-67b0-41a6-8f21-e95404b2a672/public_url",
    logoPath: "/microsoft-certified-azure-data-fundamentals.png"
  },
  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Abril 2025",
    description: "Conocimientos fundamentales en programación Python, sintaxis, estructuras de datos y programación orientada a objetos.",
    credlyUrl: "https://www.credly.com/badges/9fdae901-8c8e-45dc-9581-3f0f6d854626/public_url",
    logoPath: "/python-essentials-1.1.png"
  },
  {
    id: 3,
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Azure",
    date: "Octubre 2024",
    description: "Conocimientos fundamentales en inteligencia artificial, machine learning y servicios cognitivos en Azure.",
    credlyUrl: "https://www.credly.com/badges/90b46c04-4e31-441e-9036-347eae7bf12e/public_url",
    logoPath: "/microsoft-certified-azure-ai-fundamentals.png"
  }
];

const Certifications = () => {
  return (
    <MotionTransition position="right" className="w-full">
      <div className="flex flex-col justify-center max-w-5xl mx-auto my-8 pb-16 px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-8 mt-16 text-white md:text-5xl">
          Certificaciones
          <span className="block text-xl font-normal text-slate-300 mt-2">
            Validando competencias técnicas
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={cert.logoPath}
                      alt={`${cert.title} logo`}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-blue-300 font-medium mb-3 text-sm">
                  {cert.issuer}
                </p>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  {cert.description}
                </p>

                <button
                  onClick={() => {
                    window.open(cert.credlyUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium group/btn cursor-pointer z-10 relative"
                >
                  <span>Ver Certificación</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Otras Certificaciones Especializadas */}
        <div className="mt-16 bg-slate-900/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-md">
          <h3 className="text-xl font-bold text-blue-400 mb-6 text-center md:text-left tracking-tight">
            Otras Certificaciones Oficiales
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Scrum Product Owner Professional", issuer: "CertiProf", year: "2025" },
              { title: "Software Project Leader Professional", issuer: "CertiProf", year: "2025" },
              { title: "Artificial Intelligence Expert", issuer: "CertiProf", year: "2025" },
              { title: "Generative AI Professional", issuer: "CertiProf", year: "2025" },
              { title: "Ethical Hacking Professional", issuer: "CertiProf", year: "2025" },
              { title: "Cybersecurity Awareness Professional", issuer: "CertiProf", year: "2025" },
              { title: "Scrum Foundation Professional", issuer: "CertiProf", year: "2025" },
              { title: "DevOps Essentials Professional", issuer: "CertiProf", year: "2026" },
              { title: "Cisco Certified Support Technician Cybersecurity", issuer: "Cisco", year: "2026" },
              { title: "Cisco Certified Support Technician Networking", issuer: "Cisco", year: "2026" },
              { title: "Red Hat System Administration I – Ver 9.3", issuer: "Red Hat", year: "2025" }
            ].map((otherCert, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 group">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {otherCert.title}
                  </h4>
                  <p className="text-xs text-blue-300 font-medium">{otherCert.issuer}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-850">
                    {otherCert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionTransition>
  );
};

export default Certifications;