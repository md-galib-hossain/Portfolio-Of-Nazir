import Title from "../Title/Title";
import ImageGalleryWithText from "./components/ImageGalleryWithText";
import TopTextImageBlock from "./components/TopTextImageBlock";

const Legacy = () => {
  return (
    <div>
      {/* 1st section start*/}
      <div>
        <Title text="Legacy" />

        <TopTextImageBlock
          text={
            "Inter-Generational Reminiscence Programme with SSBA Community Trust, Big Lottery Fund and Ragged School Museum, UK; 2004: Documenting the Life, Dream, Struggle of first generation Bangladeshis in the UK by third generation Bangladeshi youths and archiving the oral-history of the personal journeys at the Ragged School Museum in Mile End, London."
          }
          imageSrc={"/legacy/legacy-banner.png"}
        />

        <ImageGalleryWithText
          text={
            "Skills Development & Empowerment Programme with Canary Wharf Plc, Isle of Dogs Community Foundation, and numerous Voluntary and Community Organisations, UK:  raised fund and facilitated community empowerment projects."
          }
          images={[
            "/legacy/legacy-1.png",
            "/legacy/legacy-2.png",
            "/legacy/legacy-3.png",
          ]}
        />
        <ImageGalleryWithText
          text={
            "Skills Development & Empowerment Programme with Canary Wharf Plc, Isle of Dogs Community Foundation, and numerous Voluntary and Community Organisations, UK:  raised fund and facilitated community empowerment projects."
          }
          images={[
            "/legacy/legacy-1.png",
            "/legacy/legacy-2.png",
            "/legacy/legacy-3.png",
          ]}
        />
        <ImageGalleryWithText
          text={
            "Skills Development & Empowerment Programme with Canary Wharf Plc, Isle of Dogs Community Foundation, and numerous Voluntary and Community Organisations, UK:  raised fund and facilitated community empowerment projects."
          }
          images={[
            "/legacy/legacy-1.png",
            "/legacy/legacy-2.png",
            "/legacy/legacy-3.png",
          ]}
        />
        <ImageGalleryWithText
          text={
            "Skills Development & Empowerment Programme with Canary Wharf Plc, Isle of Dogs Community Foundation, and numerous Voluntary and Community Organisations, UK:  raised fund and facilitated community empowerment projects."
          }
          images={[
            "/legacy/legacy-1.png",
            "/legacy/legacy-2.png",
            "/legacy/legacy-3.png",
          ]}
        />
        <ImageGalleryWithText
          text={
            "Leadership development initiatives in the UK with SOAS, University of London and London Borough of Tower Hamlets and European Union as an academic degree in post-graduation level (2011); in Bangladesh with Channel i as a TV reality show (2012-2016), in Japan with the Japanese Government with support from Toyota, Panasonic, Kyocera, Mitsubishi in forms of thought-showering and training programme (2018)."
          }
          images={[
            "/legacy/legacy-1.png",
            "/legacy/legacy-2.png",
            "/legacy/legacy-3.png",
            "/legacy/legacy-3.png",
            "/legacy/legacy-3.png",
            "/legacy/legacy-3.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Legacy;
