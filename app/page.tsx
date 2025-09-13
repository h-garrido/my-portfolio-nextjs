import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import Specialties from "@/components/specialties";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex h-auto md:min-h-[100vh] md:h-full bg-no-repeat bg-gradient-cover relative">
        <CoverParticles />
        <Introduction />
      </div>
      <Specialties />
    </main>
  );
}
