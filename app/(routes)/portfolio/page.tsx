import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import CoverParticles from "@/components/cover-particles";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <TransitionPage />
      <CoverParticles />
      <ContainerPage>
        <AvatarPortfolio />
        <CircleImage />

        <div className="flex flex-col justify-center h-full">
          <h1
            className="text-2xl leading-tight text-center
                  md:text-4xl md:mb-5"
          >
            Mis últimos <span className="text-blue-500 font-bold">trabajos</span>
          </h1>

          <div
            className="relative z-10 grid max-w-5xl gap-6
                  mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </div>
  );
};

export default PortfolioPage;
