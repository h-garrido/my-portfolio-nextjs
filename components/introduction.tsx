"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Datos del formulario:", formData);

    setFormData({ nombre: "", email: "", mensaje: "" });
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
            Estudiante avanzado de Ingeniería en Informática mención Ciencias de
            Datos...
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
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu mensaje"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>
          </form>
          {/* Fin del formulario */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
