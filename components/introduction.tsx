"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Opción 1: Usar API route local
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message || '¡Mensaje enviado correctamente! Te contactaré pronto.' 
        });
        setFormData({ nombre: "", email: "", mensaje: "" });

        // Enviar también con EmailJS
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.nombre,
            from_email: formData.email,
            message: formData.mensaje,
            to_email: 'hernan.garrido@outlook.com'
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || 'Error al enviar el mensaje. Inténtalo de nuevo.' 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error de conexión. Verifica tu internet e inténtalo de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-20 w-full bg-black/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="800"
          height="800"
          alt="Profile pic"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
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
                1000,
                " puedes implementarlo.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-blue-500"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Estudiante egresado de Ingeniería en Informática especializado en Ciencia de Datos y Análisis, con expertise en Machine Learning, Business Intelligence y desarrollo de herramientas interactivas.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            {/* <Link
              href="/"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-blue-500 border-blue-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500"
            >
              Contáctame
            </Link> */}
          </div>

          {/* Formulario agregado */}
          <form onSubmit={handleSubmit} className="mt-8 mb-8 pb-16 space-y-4">
          <h2 className="text-center justify-center text-2xl font-bold mb-4">Contáctame</h2>
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-white"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical min-h-[100px]"
                placeholder="Tu mensaje"
                rows={4}
                required
              />
            </div>
            {/* Mostrar estado del envío */}
            {submitStatus.type && (
              <div className={`p-3 rounded-md text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 text-white rounded-md transition-colors ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {/* Fin del formulario */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
