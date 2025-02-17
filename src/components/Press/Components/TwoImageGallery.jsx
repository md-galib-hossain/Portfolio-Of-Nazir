import { cn } from "@/libs/utils";
import Image from "next/image";

const TwoImageGallery = ({ images,asc=1 }) => {


  return (
    <div className="flex gap-4">
      <div className={cn("h-[20rem] ",asc===1 ? "w-[54%]":"w-[46%]")}>
        <Image height={2000} width={2000} src={images[0]} alt={`Image`} className="w-full h-full object-cover"/>
      </div>
      <div className={cn("h-[20rem] ",asc===1 ? "w-[46%]" : "w-[54%]")}>
        <Image height={2000} width={2000} src={images[1]} alt={`Image`} className="w-full h-full object-cover"/>
      </div>
      
    </div>
  );
};

export default TwoImageGallery;
