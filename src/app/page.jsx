"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sidebar } from "@/components/Sidebar/sidebar"
import { FullViewModal } from "@/components/FullViewModal/FullViewModal"

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")
  const [modalStack, setModalStack] = useState([])
  const [showText, setShowText] = useState(false)
  const [isClosing, setIsClosing] = useState(false); 
  const [closingSection, setClosingSection] = useState(null);

  useEffect(() => {
    setShowText(true)
  }, [])

  const handleSectionChange = (section) => {
    if (section === "home") {
      setModalStack([])
      setActiveSection("home")
    } else {
      setModalStack((prev) => [...prev, section])
      setActiveSection(section)
    }
  }

  const handleClose = () => {
    if (modalStack.length > 0) {
      setIsClosing(true);
      setClosingSection(modalStack[modalStack.length - 1]); 
      setTimeout(() => {
        const newStack = modalStack.slice(0, -1);
        setModalStack(newStack);
        setActiveSection(newStack.length > 0 ? newStack[newStack.length - 1] : "home");
        setIsClosing(false);
        setClosingSection(null); 
      }, 500); 
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} isHomePage={true} />

      <main className="flex-1 relative">
        {activeSection === "home" && (
          <div className="absolute inset-y-0 left-0 w-[10rem] bg-[#252525] z-10" />
        )}

        <div
          className={`absolute inset-0 bg-cover bg-center z-0 `}
          style={{ backgroundImage: 'url("/nazir.png?height=1080&width=1920")' }}
        />

        <div className="relative z-10 h-full p-12 text-white flex items-center">
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <h2 className="text-4xl mb-2">MY NAME IS</h2>
                <h1 className="text-7xl font-bold">Nazir Alam</h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {modalStack.map((section, index) => (
          <FullViewModal
            key={`${section}-${index}`}
            activeSection={section}
            onSectionChange={handleSectionChange}
            onClose={handleClose}
            isClosing={isClosing && closingSection === section} 
          />
        ))}
      </main>
    </div>
  )
}