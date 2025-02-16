"use client";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/sidebar";


export function ProfileModal({ activeSection, onSectionChange, onClose, isClosing }) {
  console.log({isClosing})
  return (
    <motion.div
      initial={isClosing ? { x: "100%" }:{ x: "-100%" }}
      animate={ { x: 0 }}
      transition={{
        type: "spring",
        stiffness: 80, 
        damping: 20, 
        duration: 0.7, 
      }}
      className="fixed inset-y-0 left-0 right-0 z-50 flex"
    >
      <Sidebar
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        onClose={onClose}
        isHomePage={false}
      />

      <div className="flex-1 bg-zinc-900 bg-opacity-80 backdrop-blur-md overflow-auto">
        <div className="p-12">
          <SectionContent section={activeSection} />
        </div>
      </div>
    </motion.div>
  );
}
function SectionContent({ section }) {
  switch (section) {
    case "profile":
      return (
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-8">H E Nazir Alam</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                Consul of Democratic Republic of The Congo (DRC) in Dhaka,
                Bangladesh.
              </h2>
              <p className="text-zinc-300">
                Active roles involve implementation of G2G, G2B, B2B services,
                manufacturing & trading in AI,Cyber security & ICT, Education,
                Fintech, Legaltech, Pharmaceuticals, Ready made garments,Export
                processing zone and Recycling solutions for batteries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                CEO of The Future Leaders Ltd. & Founder & Director of ICS
                Holdings Ltd.
              </h2>
              <p className="text-zinc-300">
                Active roles involve developing & delivering bespoke accredited
                skills training for employment & enterprise development with
                Government Trust & Foundations,
                distribution/assembly-manufacturing of Automotive batteries &
                other storage solutions, Master franchise/solutions.
              </p>
            </section>
          </div>
        </div>
      );
    case "my-story":
      return <h1 className="text-4xl font-bold text-white">My Story</h1>;
    case "legacy":
      return <h1 className="text-4xl font-bold text-white">Legacy</h1>;
    case "press":
      return <h1 className="text-4xl font-bold text-white">Press</h1>;
    case "videos":
      return <h1 className="text-4xl font-bold text-white">Videos</h1>;
    case "projects":
      return <h1 className="text-4xl font-bold text-white">Projects</h1>;
    case "contact":
      return <h1 className="text-4xl font-bold text-white">Contact</h1>;
    default:
      return (
        <h1 className="text-4xl font-bold text-white">Section Not Found</h1>
      );
  }
}