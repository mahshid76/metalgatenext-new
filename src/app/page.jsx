// pages/index.js
import Slider from  "../app/components/slider/Slider";
import Gallery from "../app/gallery/Gallery";

export default function Home() {
  return (
<div className="px-0">

  {/* Slider Section */}
  <section className="relative w-full h-screen">
    <Slider />
  </section>

  {/* Optional separator */}
  <div className="border-t border-gray-300 my-8"></div>

  {/* Gallery Section */}
  <section className="my-10 md:my-16">
    <Gallery />
  </section>

</div>


  );
}
