import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    technologies: string[];
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo, technologies } = data;

  // Si es un proyecto placeholder "Próximamente"
  const isPlaceholder = urlGithub === "#!" && technologies.length === 0;

  if (isPlaceholder) {
    return (
      <div className="group relative flex flex-col items-center justify-center p-6 min-h-[340px] border-2 border-dashed border-slate-700/60 hover:border-blue-500/50 bg-slate-900/10 hover:bg-slate-900/20 rounded-xl transition-all duration-300">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-slate-800 border border-slate-700/60 group-hover:bg-blue-950 group-hover:border-blue-500/50 text-slate-400 group-hover:text-blue-400 transition-all duration-300 shadow-md group-hover:shadow-blue-500/10">
            <Plus size={28} className="transition-transform duration-300 group-hover:rotate-90" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
            Preparando nuevas e innovadoras soluciones para integrar al portafolio.
          </p>
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  }

  // Si es un proyecto real
  const hasDemo = urlDemo && urlDemo !== "#!" && urlDemo.trim() !== "";

  return (
    <div className="group flex flex-col justify-between p-4 bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/30 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
      <div>
        <h3 className="mb-3 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <div className="w-full h-[180px] relative overflow-hidden rounded-lg bg-slate-950 border border-slate-800">
          <Image
            src={image}
            alt={`${title} image`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[10px] font-semibold text-blue-300 bg-blue-950/40 border border-blue-800/30 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-slate-200 transition duration-150"
        >
          GitHub
        </Link>
        
        {hasDemo && (
          <Link
            href={urlDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-150"
          >
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioBox;
