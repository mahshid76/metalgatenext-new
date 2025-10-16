"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "@use-gesture/react";

const projects = [
  { src: "/images/1.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/5.jpg" },
  { src: "/images/6.jpg" },
  { src: "/images/7.jpg" },
  { src: "/images/8.jpg" },
  { src: "/images/9.jpg" },
  { src: "/images/10.jpg" },
  { src: "/images/11.jpg" },
  { src: "/images/12.jpg" },
  { src: "/images/13.jpg" },
  { src: "/images/14.jpg" },
  { src: "/images/15.jpg" },
  { src: "/images/16.jpg" },
  { src: "/images/17.jpg" },
  { src: "/images/18.jpg" },
  { src: "/images/19.jpg" },
  { src: "/images/20.jpg" },
  { src: "/images/21.jpg" },
  { src: "/images/22.jpg" },
  { src: "/images/23.jpg" },
  { src: "/images/24.jpg" },
  { src: "/images/25.jpg" },
  { src: "/images/26.jpg" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };
  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Swipe gestures
  const bind = useDrag(
    ({ down, movement: [mx], velocity, direction: [xDir] }) => {
      if (!down && Math.abs(mx) > 50) {
        if (xDir < 0) handleNext();
        if (xDir > 0) handlePrev();
      }
    }
  );

  return (
    <section className="my-10 px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative w-full h-56 rounded-xl overflow-hidden cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedIndex(index)}
            animate={{
              opacity:
                selectedIndex !== null && selectedIndex !== index ? 0.3 : 1,
              scale:
                selectedIndex !== null && selectedIndex !== index ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-11/12 sm:w-3/4 lg:w-1/2 h-[80vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              {...bind()}
            >
              <Image
                src={projects[selectedIndex].src}
                alt={projects[selectedIndex].title}
                fill
                className="object-contain rounded-lg"
              />

              {/* دکمه Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 text-white text-3xl font-bold"
              >
                ×
              </button>

              {/* دکمه‌های بعدی و قبلی */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}