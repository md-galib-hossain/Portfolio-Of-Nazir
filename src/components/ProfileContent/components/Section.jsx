import Image from "next/image";
import SectionHeading from "./SectionHeading";

const Section = ({ title, flagSrc, children }) => (
    <section className="">
      <div className="flex justify-between items-start gap-4">
        <SectionHeading>{title}</SectionHeading>
        <div className="w-[4.4rem] h-auto">
          <Image
            height={2000}
            width={2000}
            className="object-cover w-full h-full"
            alt="Flag"
            src={flagSrc}
          />
        </div>
      </div>
      <div className="max-w-[51rem]">{children}</div>
    </section>
  );
  export default Section;