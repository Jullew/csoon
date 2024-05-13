import ParticlesBackground from "@/components/utils/ParticlesBackground";
import ParticlesBackgroundDark from "@/components/utils/ParticlesBackgroundDark";
import LeftSide from "@/components/layout/leftSide/LeftSide";
import RightSide from "@/components/layout/rightSide/RightSide";

export default function Home() {
  return (
    <>
      <ParticlesBackgroundDark />   
      <div className="flex flex-wrap ">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}
