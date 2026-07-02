export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
      <h1 className="text-6xl font-extrabold">
        <span className="text-orange-500">Mainswitch</span>{" "}
        <span className="text-blue-500">Mcoasty</span>
      </h1>

      <p className="mt-6 text-2xl text-gray-300">
        Everything You Need Around Chuka University
      </p>

      <p className="mt-8 max-w-3xl text-gray-400">
        Cyber Services • Laundry • House Hunting • Blogging • Digital
        Marketing • Second-Hand Deals
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#services"
          className="rounded-xl bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600 transition"
        >
          Explore Services
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-orange-500 px-8 py-4 font-semibold hover:bg-orange-500 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}