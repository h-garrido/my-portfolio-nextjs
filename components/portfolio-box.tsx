import Image from "next/image";
import Link from "next/link";

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
  const { title, image, urlGithub, technologies } = data;

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <div className="w-full h-[200px] relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt="Image product"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500
                hover:bg-slate-500/65"
        >
          GitHub
        </Link>
        {/* <Link href={urlDemo} target="_blank"
                className="p-2 transition duration-150 rounded-lg bg-blue-500
                hover:bg-blue-500/65">
                Demo 
                </Link> */}
      </div>
    </div>
  );
};

export default PortfolioBox;
