import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Mi trayectoria académica{" "}
          <span className="block font-bold text-blue-500">y profesional</span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
