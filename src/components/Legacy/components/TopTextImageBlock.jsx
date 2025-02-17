// components/ImageTextBlock.jsx
import Image from "next/image";

const ImageTextBlock = ({ text, imageSrc, imageAlt = "Image" }) => {
  return (
    <div className="flex gap-4">
      <div className="w-[15rem]">
        <p className="text-base font-thin font-proxima text-white">{text}</p>
      </div>
      <div className="flex-1 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          // width={1000}
          // height={1000}
          fill
        />
      </div>
    </div>
  );
};

export default ImageTextBlock;
