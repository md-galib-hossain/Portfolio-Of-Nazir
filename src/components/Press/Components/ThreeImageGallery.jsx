import Image from 'next/image';

const ThreeImageGallery = ({ mainImage, sideImages }) => {


  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Left Column (Main Image) */}
      <div className="relative h-full col-span-1 md:col-span-1.5"> 
        <Image
          src={mainImage}
          alt="Main Image"
       height={2000}
       width={2000}
       className='w-full h-full object-cover'
        />
      </div>

      {/* Right Column (2 Side Images) */}
      <div className="flex flex-col gap-4">
        {sideImages.map((image, index) => (
          <div key={index} className="relative h-full"> {/* Adjust height as needed */}
            <Image
              src={image}
              alt={`Side Image ${index + 1}`}
              height={2000}
              width={2000}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeImageGallery;