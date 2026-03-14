import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import HeroSection from "./HeroSection";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen">
      <BackgroundRippleEffect rows={11} cols={48} cellSize={50} />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <HeroSection/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
