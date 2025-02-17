import Image from "next/image";

const ImageTextSection = ({ imageSrc, imageAlt, textItems }) => (
    <div className="flex-1">
      <div className="h-full flex flex-col justify-between">
        <div className="h-[20rem]">
          <Image
            height={2000}
            width={2000}
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        <div className="p-4 flex flex-col gap-4 text-white">
          {textItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );

  export default ImageTextSection