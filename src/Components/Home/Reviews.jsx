import { cn } from "../../lib/utils";
import { Marquee } from "../magicui/marquee";
import PropTypes from "prop-types";
import user1 from "@/assets/user1.jpeg";
import user2 from "@/assets/user2.jpeg";
import user3 from "@/assets/user3.jpeg";
import user4 from "@/assets/user4.jpeg";
import user5 from "@/assets/user5.jpeg";
import user6 from "@/assets/user6.jpeg";
import { AnimatedDivider } from "./AnimatedDivider";
const reviews = [
  {
    img: user1,
  },
  {
    img: user2,
  },
  {
    img: user3,
  },
  {
    img: user4,
  },
  {
    img: user5,
  },
  {
    img: user6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-40 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-[#7f2e50]/[.2] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-lg" width="100%" alt="" src={img} />
      </div>
    </figure>
  );
};
ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export function MarqueeDemo() {
  return (
    <div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10 ">
        <div className="text-3xl text-[#7f2e50] font-bold leading-none md:text-[45px] mb-6">
          Our Valuable Users
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
      <AnimatedDivider color="#7f2e50" className="my-10" />
    </div>
  );
}
