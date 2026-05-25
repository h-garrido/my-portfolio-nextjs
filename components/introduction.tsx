"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
import { Turnstile } from "@marsidev/react-turnstile";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

const Introduction = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      setSubmitStatus({
        type: "error",
        message: "Por favor completa la verificación de seguridad.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Opción 1: Usar API route local
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "¡Mensaje enviado correctamente! Te contactaré pronto.",
        });
        setFormData({ nombre: "", email: "", mensaje: "" });
        setTurnstileToken(null);

        // Enviar también con EmailJS
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.nombre,
            from_email: formData.email,
            message: formData.mensaje,
            to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hernan.garrido@outlook.com",
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error || "Error al enviar el mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-20 w-full bg-black/60 relative">
      <div className="grid items-center h-full p-6 py-8 md:py-12 md:grid-cols-2 gap-8">
        <Image
          src="/home-4.webp"
          priority
          width="800"
          height="800"
          alt="Profile pic"
          className="w-full h-auto max-w-[280px] md:max-w-full mx-auto order-2 md:order-last"
        />
        <div className="flex flex-col justify-center max-w-md order-1 md:order-first">
          <h1 className="mb-5 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-left md:text-5xl md:mb-8">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                " puedes analizarlo",
                1000,
                " puedes visualizarlo",
                1000,
                " puedes programarlo.",
                1000,
                " puedes desarrollarlo.",
                1000,
                " puedes optimizarlo.",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-extrabold text-blue-500"
            />
          </h1>
          <p className="mx-auto mb-6 text-base md:text-lg text-slate-300 leading-relaxed text-center md:text-left">
            Ingeniero en Informática, especializado en
            Ciencia de Datos y Análisis, con expertise en Machine Learning,
            Business Intelligence y desarrollo de herramientas interactivas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:justify-start md:gap-4 w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="px-4 py-2.5 transition-all duration-300 border-2 border-white hover:border-blue-500 cursor-pointer text-sm font-semibold w-full sm:w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500/20 text-center"
            >
              Ver proyectos
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2.5 transition-all duration-300 border-2 border-blue-500 hover:border-blue-400 text-blue-500 hover:text-blue-400 cursor-pointer text-sm font-semibold w-full sm:w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500/20 text-center"
            >
              Contáctame
            </button>
            <a
              href="/cv.pdf"
              download="CV_Hernan_Garrido.pdf"
              className="px-4 py-2.5 transition-all duration-300 border-2 border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white cursor-pointer text-sm font-semibold w-full sm:w-fit rounded-xl hover:shadow-xl hover:shadow-slate-500/10 text-center flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Contacto Glassmórfico */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 bg-slate-900/80 backdrop-blur-md border border-slate-700/30 rounded-2xl shadow-2xl shadow-blue-500/10 flex flex-col justify-between max-h-[90vh] overflow-y-auto"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer z-50"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-center text-white mb-1">
                  Contáctame
                </h2>
                <p className="text-center text-xs text-slate-400 mb-4">
                  Envíame un mensaje y me pondré en contacto contigo a la brevedad.
                </p>

                <div>
                  <label htmlFor="nombre" className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-950/60 text-white border border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-950/60 text-white border border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Tu email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-950/60 text-white border border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none min-h-[100px] text-sm"
                    placeholder="Tu mensaje..."
                    rows={4}
                    required
                  />
                </div>

                {/* Mostrar estado del envío */}
                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-md text-xs font-semibold ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Cloudflare Turnstile */}
                <div className="flex justify-center py-1">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={setTurnstileToken}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                    options={{
                      theme: "dark",
                      size: "normal",
                      retry: "auto",
                      refreshExpired: "auto",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 px-4 text-sm font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                    isSubmitting
                      ? "bg-slate-700 cursor-not-allowed text-slate-400"
                      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Introduction;
