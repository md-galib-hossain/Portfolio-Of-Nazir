"use client"
import { cn } from "@/libs/utils";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { GalleryModal } from "../GalleryModal/GalleryModal";

const navItems = [
  { id: "profile", label: "Profile" },
  { id: "my-story", label: "My Story" },
  { id: "legacy", label: "Legacy" },
  { id: "press", label: "Press" },
  { id: "videos", label: "Videos" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
export function Sidebar({
  activeSection,
  onSectionChange,
  onClose,
  isHomePage = false,
}) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpenGallery = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };
  return (
    <>
    
    
    <div className="w-[24rem] bg-[#252525] text-white p-6 ">
      <div className="flex flex-col h-full max-w-[14rem] mx-auto text-start">
        <div className=" flex justify-start mb-8">
          {isHomePage ? (
      
          
            <img
              src="/nazir-alam.png"
              alt="Nazir Alam"
              className="rounded-full object-cover"
            />
          
          ) : (
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          )}
        </div>
        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full text-left py-2 px-3 rounded-lg transition-colors text-[1.4rem] md:text-[1.6rem] xl:text-[1.8rem] font-proxima font-thin",
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {/* Bottom part */}
        <div className="mt-auto pt-4 flex flex-col gap-2">
          <div>
            <button>
              <BsGrid3X3GapFill onClick={handleOpenGallery} size={40} />
            </button>
          </div>
          <div className="flex gap-4">
            <AiOutlineFacebook size={20} />
            <FaXTwitter size={20} />
          </div>
          <p className="text-[#BABABA] text-sm md:text-base">Copyright 2024 @ Nazir Alam</p>
          <p className="text-[#BABABA] text-sm md:text-base">
            Made with <span>💙 </span>by{" "}
            <span className="text-blue-400">Antopolis</span>
          </p>
        </div>
      </div>
    </div>
    <GalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        images={['/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png','/nazir.png',]}
      />
    </>
  );
}
