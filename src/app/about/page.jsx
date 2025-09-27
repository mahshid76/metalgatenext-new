export default function page() {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                class=" rounded-xl object-cover"
                src="/assets/2.jpg"
                alt="about Us image"
              />
            </div>
            <img
              src="/assets/1.jpg"
              class="sm:ml-0 ml-auto rounded-xl object-cover"
              alt="about Us image"
            />
          </div>
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                 About Us
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                 Metalgate Leeds Ltd is a trusted provider of high-quality metal fabrication and engineering solutions,
                 proudly serving clients across Leeds and the West Yorkshire. With years of industry experience,
                 we specialise in custom metalwork, gates, railings, fences, and structural steel projects delivering
                 precision, durability, and excellent customer service every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
