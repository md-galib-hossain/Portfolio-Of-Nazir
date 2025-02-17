import { cn } from "@/libs/utils";

const { default: Link } = require("next/link");

const StoryGridItem = ({ index,title, buttonText, buttonLink }) => {
    return (
      <div className={cn("text-white p-4 flex flex-col justify-between",index==2 ? "md:border-r-0" : "md:border-r-[1px]")}>
        <p className="text-[0.9rem]">{title}</p>
        <Link href={buttonLink}>
          <button className="bg-[#2161F9] py-2 px-4 rounded-xl text-white mt-4 font-semibold shadow-[0px_4px_4px_#7A21ED4D]">
            {buttonText}
          </button>
        </Link>
      </div>
    );
  };

  export default StoryGridItem