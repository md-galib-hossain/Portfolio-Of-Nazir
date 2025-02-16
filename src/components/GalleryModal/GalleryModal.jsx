"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function GalleryModal({ isOpen, onClose, images }) {
  const [displayedImages, setDisplayedImages] = useState([]);
  const containerRef = useRef(null);
  const initialLoadCount = 12;
  const incrementalLoadCount = 6;

  useEffect(() => {
    if (isOpen) {
      setDisplayedImages(images.slice(0, initialLoadCount));
    }
  }, [isOpen, images]);

  const handleScroll = () => {
    if (containerRef.current) {
      const element = containerRef.current;
      if (
        element.scrollHeight - element.scrollTop === element.clientHeight &&
        displayedImages.length < images.length
      ) {
        const nextImages = images.slice(
          displayedImages.length,
          displayedImages.length + incrementalLoadCount
        );
        setDisplayedImages((prev) => [...prev, ...nextImages]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", y: "100%" }}
          animate={{ x: 0, y: 0 }}
          exit={{ x: "100%", y: "100%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
        >
          <div
            ref={containerRef}
            className="relative w-full h-full p-4 overflow-y-auto hide-scrollbar"
            onScroll={handleScroll}
          >
            <div className="absolute bottom-36 left-36 z-10"> 
              <button
                onClick={onClose}
                className="flex fixed items-center justify-center w-16 h-16 rounded-full bg-[#2161F9A6] hover:bg-[#2161F9A6] transition-colors" 
              >
                <MdKeyboardArrowLeft className="h-8 w-8 text-white" /> 
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {displayedImages.map((image, i) => (
                <div className="h-[25rem] w-[29rem]" key={i}>
                  <Image
                    height={2000}
                    width={2000}
                    src={image}
                    alt={`Gallery Image ${i}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}