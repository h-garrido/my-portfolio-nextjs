import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import Specialties from "@/components/specialties";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[120vh] md:min-h-[100vh] bg-no-repeat bg-gradient-cover relative pt-20 md:pt-24">
        <CoverParticles />
        <Introduction />
      </div>
      <Specialties />
    </main>
  );
}
