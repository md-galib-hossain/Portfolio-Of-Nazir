import Image from "next/image";

const ImageGalleryWithText = ({ text, images }) => {
  return (
    <div className="mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden ">
            <Image
              src={image}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-auto object-cover"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-300 text-sm">
        {text}
      </p>
    </div>
  );
};

export default ImageGalleryWithText;
