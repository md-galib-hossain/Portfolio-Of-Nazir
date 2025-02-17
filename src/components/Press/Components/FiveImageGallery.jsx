import Image from 'next/image';

const FiveImageGallery = ({ images, mainImage }) => {
  return (
    <div className="flex gap-4 items-center">
      {/* Left Column (4 images) */}
      <div className="flex flex-col gap-4 w-[45%]">
        {images.map((image, index) => (
          <div key={index} className="w-full h-[17.7rem] flex-1">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              height={2000}
              width={2000}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Right Column (Main Image - Wider) */}
      <div className="h-full w-[55%]"> {/* Adjust col-span */}
        <Image
          src={mainImage}
          alt="Main Image"
          height={2000}
          width={2000}
          className='w-full h-full object-cover'
         
        />
      </div>
    </div>
  );
};

export default FiveImageGallery;