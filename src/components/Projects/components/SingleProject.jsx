import Image from 'next/image';
import React from 'react';

const SingleProject = ({ key,project, index }) => {
  const { image, smallText, title, subTitle, text } = project;
  const isLeft = index % 2 === 0;

  return (
    // <div key={key} className={`flex items-start font-proxima mb-10 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    <div key={key} className={`flex items-start font-proxima mb-10 even:flex-row-reverse `}>
       (
        <div className='flex gap-6'>
          <div className="w-[44%]">
            <Image src={image} alt={title} className="w-full max-w-lg object-cover h-[23rem]" height={2000} width={2000}/>
          </div>
          <div className="flex-1 flex flex-col items-start gap-6">
            <p className="text-sm text-white ">{smallText}</p>
            <h2 className="text-4xl text-white font-semibold ">{title}</h2>
            <p className="text-sm text-white ">{subTitle}</p>
            <p className="text-base text-white ">{text}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              View details
            </button>
          </div>
        </div>
      ) 
    </div>
  );
};

export default SingleProject;