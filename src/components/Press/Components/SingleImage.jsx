import Image from "next/image";

const SingleImage = ({className,image,alt="Image"}) => {
  return (
    <div>
      <Image
        height={2000}
        width={2000}
        alt={alt}
        src={image}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SingleImage;
