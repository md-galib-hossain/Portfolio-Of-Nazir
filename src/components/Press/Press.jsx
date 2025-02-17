import Image from "next/image";
import Title from "../Title/Title";
import SingleImage from "./Components/SingleImage";
import TwoImageGallery from "./Components/TwoImageGallery";
import FiveImageGallery from "./Components/FiveImageGallery";
import ThreeImageGallery from "./Components/ThreeImageGallery";

const Press = () => {
  return (
    <div className="font-proxima">
      <Title
        className="mb-0"
        text="I'm Nazir Alam"
        subTitle={"And I love to pioneer and leave legacy."}
      />
      <p className="text-white font-thin mt-4">
        Pioneered Leadership Programmes in the UK & Bangladesh in forms of
        Academeic Qualification at Post Graduation Level & in TV; On-Off Shore
        Franchise Management of Brands; G2B Sustainable Infrastructure Projects
        in Africa; Innovation & Ethics Driven Education Institutions; Skills
        Development Programmes & ATS-based Agencies in Care & Hospitality with
        Qualifications Recognised World-wide.
      </p>
      {/* Image gallery start */}
      <div className="flex flex-col gap-8 mt-12">
        <SingleImage image={"/press/press-1.png"} />
        <SingleImage image={"/press/press-2.png"} />
        <TwoImageGallery
          images={["/press/press-3.png", "/press/press-4.png"]}
          asc={1}
        />
        <TwoImageGallery
          images={["/press/press-4.png", "/press/press-3.png"]}
          asc={0}
        />
        <SingleImage image={"/press/press-7.png"} />
        <SingleImage image={"/press/press-8.png"} />
        <FiveImageGallery images={["/press/press-10.png","/press/press-11.png","/press/press-12.png","/press/press-13.png"]} mainImage={"/press/press-9.png"}/>
        <ThreeImageGallery mainImage="/press/press-16.png" sideImages={["/press/press-14.png","/press/press-15.png"]}/>
        <TwoImageGallery
          images={["/press/press-4.png", "/press/press-3.png"]}
          asc={1}
        />
        <TwoImageGallery
          images={["/press/press-4.png", "/press/press-3.png"]}
          asc={0}
        />
        <TwoImageGallery
          images={["/press/press-4.png", "/press/press-3.png"]}
          asc={1}
        />
      </div>
    </div>
  );
};

export default Press;
