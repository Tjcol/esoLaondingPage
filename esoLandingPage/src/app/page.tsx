import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Audience } from "@/components/sections/Audience";
import { Bio } from "@/components/sections/Bio";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Process />
      <Audience />
      <Bio />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
