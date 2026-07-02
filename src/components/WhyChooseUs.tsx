export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-orange-500">
          Why Choose Mainswitch Mcoasty?
        </h2>

        <p className="text-center text-gray-400 mt-4">
          We provide trusted, affordable and convenient services for students around Chuka University.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-orange-500">
              ⚡ Fast Service
            </h3>

            <p className="text-gray-400 mt-4">
              Quick turnaround for cyber services, laundry and house hunting.
            </p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-orange-500">
              💰 Affordable Prices
            </h3>

            <p className="text-gray-400 mt-4">
              Student-friendly prices without compromising quality.
            </p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-orange-500">
              ❤️ Trusted by Students
            </h3>

            <p className="text-gray-400 mt-4">
              Serving the Chuka University community with professionalism and reliability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}