"use client";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/sidebar";
import ProfileContent from "../ProfileContent/ProfileContent";
import MyStory from "../MyStory/MyStory";
import Legacy from "../Legacy/Legacy";
import Press from "../Press/Press";

export function FullViewModal({
  activeSection,
  onSectionChange,
  onClose,
  isClosing,
}) {
  console.log({ isClosing });
  return (
    <motion.div
      initial={isClosing ? { x: "100%" } : { x: "-100%" }}
      animate={{ x: 0 }}
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
      return <ProfileContent></ProfileContent>;
    case "my-story":
      return <MyStory></MyStory>;
    case "legacy":
      return <Legacy></Legacy>;
    case "press":
      return <Press></Press>;
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
