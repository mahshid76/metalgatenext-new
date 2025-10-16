"use client";
import { useState } from "react";
import Image from "next/image";

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

  return (
    <section className="my-10 px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

      {/* Grid of small images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-full h-56 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 ${
              selectedIndex !== null && selectedIndex !== index
                ? "opacity-30 scale-90"
                : "hover:scale-105"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Main image */}
          <div
            className="relative w-11/12 sm:w-3/4 lg:w-1/2 h-[60vh] sm:h-[70vh] transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[selectedIndex].src}
              alt={projects[selectedIndex].title}
              fill
              className="object-contain rounded-lg transition-transform duration-300 scale-100 hover:scale-105"
            />
            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">
                {projects[selectedIndex].title}
              </h3>
              <p className="text-md">{projects[selectedIndex].category}</p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              ×
            </button>

            {/* Prev/Next buttons */}
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
          </div>

          {/* Thumbnails below */}
          <div className="flex gap-2 mt-6 overflow-x-auto px-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  index === selectedIndex
                    ? "border-white"
                    : "border-transparent"
                } transition-transform duration-200 hover:scale-105`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}