"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export function ModalContent({ className }) {
  const [activeSection, setActiveSection] = useState<"left" | "main" | "right">("main")

  return (
    <div className={cn("flex h-full relative overflow-hidden", className)}>
      {/* Left Sidebar */}
      <motion.div
        className="absolute left-0 top-0 h-full bg-muted w-80"
        initial={{ x: "-100%" }}
        animate={{ x: activeSection === "left" ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Left Sidebar</h2>
          {/* Add your left sidebar content here */}
        </div>
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={() => setActiveSection("main")}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex-1 p-6"
        animate={{
          x: activeSection === "left" ? 320 : activeSection === "right" ? -320 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between mb-4">
          <Button variant="outline" onClick={() => setActiveSection("left")}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Open Left
          </Button>
          <Button variant="outline" onClick={() => setActiveSection("right")}>
            Open Right
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="text-muted-foreground">
            This is the main content area. Click the buttons above to open the sidebars.
          </p>
        </div>
      </motion.div>

      {/* Right Sidebar */}
      <motion.div
        className="absolute right-0 top-0 h-full bg-muted w-80"
        initial={{ x: "100%" }}
        animate={{ x: activeSection === "right" ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Right Sidebar</h2>
          {/* Add your right sidebar content here */}
        </div>
        <Button variant="ghost" size="icon" className="absolute left-2 top-2" onClick={() => setActiveSection("main")}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}

