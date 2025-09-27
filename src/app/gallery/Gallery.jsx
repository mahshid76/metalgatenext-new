import Image from "next/image";

const projects = [
  { src: "/images/1.jpg", title: "Project One", category: "Residential" },
  { src: "/images/2.jpg", title: "Project Two", category: "Commercial" },
  { src: "/images/3.jpg", title: "Project Three", category: "Industrial" },

  { src: "/images/5.jpg", title: "Project Five", category: "Industrial" },
  { src: "/images/6.jpg", title: "Project Six", category: "Industrial" },
  { src: "/images/7.jpg", title: "Project Seven", category: "Industrial" },
  { src: "/images/8.jpg", title: "Project Eight", category: "Industrial" },
  { src: "/images/9.jpg", title: "Project Nine", category: "Industrial" },
  { src: "/images/10.jpg", title: "Project Ten", category: "Industrial" },
  { src: "/images/11.jpg", title: "Project Eleven", category: "Industrial" },
  { src: "/images/12.jpg", title: "Project Twelve", category: "Industrial" },
  { src: "/images/13.jpg", title: "Project Thirteen", category: "Industrial" },
  { src: "/images/14.jpg", title: "Project Fourteen", category: "Industrial" },
  { src: "/images/15.jpg", title: "Project Fifteen", category: "Industrial" },
  { src: "/images/16.jpg", title: "Project Sixteen", category: "Industrial" },
  { src: "/images/17.jpg", title: "Project Seventeen", category: "Industrial" },
  { src: "/images/18.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/19.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/20.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/21.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/22.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/23.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/24.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/25.jpg", title: "Project Three", category: "Industrial" },
  { src: "/images/26.jpg", title: "Project Three", category: "Industrial" },

];

export default function Gallery() {
  return (
    <section className="my-10 md:my-16 px-4 lg:px-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-xl group"
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white p-2">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm md:text-base">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
