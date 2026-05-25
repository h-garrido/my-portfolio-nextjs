import Avatar from "@/components/avatar";
import Certifications from "@/components/certifications";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import CoverParticles from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <ContainerPage>
          <Avatar />
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-center md:text-left md:text-5xl md:mt-10">
            Mi trayectoria Académica y{" "}
            <span className="block font-extrabold text-blue-500">Profesional</span>
          </h1>
          <CounterServices />
          <TimeLine />
        </ContainerPage>
      </div>
      <div className="bg-slate-900/90">
        <Certifications />
      </div>
    </>
  );
};

export default AboutMePage;
