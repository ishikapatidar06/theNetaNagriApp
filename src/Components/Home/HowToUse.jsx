import demoVideo from "../../assets/demo-video.mp4";
import { BorderBeam } from "../magicui/border-beam";
import { AnimatedDivider } from "./AnimatedDivider";

const VideoDemo = () => {
  return (
    <div>
      <div className="relative video-container text-center p-4 mt-10">
        <h2 className="text-[#7f2e50] text-2xl font-bold  md:text-[45px] mb-10">
          Explore a Quick Way to How Our NetaNagri App Works
        </h2>
        <div className="">
          <video width="100%" controls>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              className="from-transparent via-blue-500 to-transparent"
            />
          </video>
        </div>
      </div>
      <AnimatedDivider className="my-9" color="#7f2e50" />
    </div>
  );
};

export default VideoDemo;
