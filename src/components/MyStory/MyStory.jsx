import Image from "next/image";
import StoryGridItem from "./components/StoryGridItem";
import Title from "../Title/Title";
import TextList from "./components/TextList";
import ImageTextSection from "./components/ImageTextSection";

const MyStory = () => {
  const storyItems = [
    {
      title:
        "Leadership Development Platforms; On-Off Shore Franchise Management; Refinement of Educational Institutions",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      title:
        "Organisational Capacity Building, Compliance, QA for Sustainable Growth Management",
      buttonText: "View Details",
      buttonLink: "#",
    },
    {
      title:
        "Fashion & RMG industry and Manufacturing & Supply Chain Management through ICT Platforms",
      buttonText: "View Details",
      buttonLink: "#",
    },
  ];

  const channelGrid = [
      { src: "/channels/channel-3.png", precedence: 3 },
    { src: "/channels/channel-1.png", precedence: 1 },
    { src: "/channels/channel-2.png", precedence: 2 },
    { src: "/channels/channel-4.png", precedence: 4 },
    { src: "/channels/channel-5.png", precedence: 5 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
    { src: "/channels/channel-6.png", precedence: 6 },
  
  ];

  return (
    <div>
      <div className="w-full">
        <Image
          height={2000}
          width={2000}
          className="object-cover w-full h-full"
          src={"/my-story-banner.png"}
          alt="My Story Banner"
        />
      </div>
      {/* 1st section start */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
        {storyItems.map((item, index) => (
          <StoryGridItem
            index={index}
            key={index}
            title={item.title}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
          />
        ))}
      </div>
      {/* 1st section end */}
      {/* 2nd esction start */}
      <div className="mt-12">
        <Title text="Sharp as always" />
        <div className="flex flex-col md:flex-row gap-6">
          {/* left side */}
          <TextList
            items={[
              "Management Specialist: British Standard (BS-6079), APM, UK",
              "Licensed Mentor of Quality Assurance: SMEs and VCOs, CES, UK",
              "Post Graduation in Management, Cass Business School, City University, UK",
              "Post Graduation in Law & Leadership, SOAS, University of London, UK",
              "Acquisition and Management Expert: Master Franchise Rights of RMG, Sports, F&B and Consumer Brands",
              "Creative TV Programme Formating and Media Rights Acquisation & Management",
              "Fashion and Luxury Goods Production & Management: Bangladesh, China, Italy, Australia",
            ]}
          />
          {/* right side */}
          <ImageTextSection
            imageSrc="/pencil.png"
            imageAlt="Pencil"
            textItems={[
              "Higher Education & Skills for Employment Specialist: Double Degree, Professional and Skills Programmes Leading to Employment, A1 Assessor",
              "Service level Consultancy specialisation on G2G & G2B: bases in Dhaka, Kiev, Kinshasa, London, & Melbourne",
              "Initiator of Community Leadership Programme (CLP) UK; The Future Leaders Programme (FLP) & Excellence in Entrepreneurship Programme (EEP), Bangladesh; and The Future Leaders Programme (FLP) in Democratic Republic of Congo (DRC)",
            ]}
          />
        </div>
      </div>
      {/* 2nd section end */}
      {/* 3rd section start */}
      <div className="mt-12">
        <Title text="Ownership, Partnership & Association" />
        {/* logo grid */}
        <div className="grid grid-cols-4 gap-4 bg-white rounded-md p-14">
          {channelGrid.map((item, i) => (
            <div key={i} className="w-full h-12 relative">
              <Image
                src={item.src}
                alt={`Channel ${item.precedence}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* 3rd section end */}
    </div>
  );
};

export default MyStory;