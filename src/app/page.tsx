import Navbar from "../components/Navbar";
import About from "../components/About";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <h1 className="text-2xl font-bold">
      <span className="text-orange-500">Mainswitch</span>{" "}
      <span className="text-blue-500">Mcoasty</span>
    </h1>

    <div className="hidden md:flex gap-8 text-gray-300">
      <a href="#services" className="hover:text-orange-500 transition">
        Services
      </a>

      <a href="#contact" className="hover:text-orange-500 transition">
        Contact
      </a>
    </div>
  </div>
</nav>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="text-6xl font-extrabold">
          <span className="text-orange-500">Mainswitch</span>{" "}
          <span className="text-blue-500">Mcoasty</span>
        </h1>
        <p className="mt-6 text-2xl text-gray-300">
          Everything You Need Around Chuka University
        </p>
        <p className="mt-8 max-w-3xl text-gray-400">
          Cyber Services • Laundry • House Hunting • Blogging • Digital Marketing • Second-Hand Deals
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
  href="#services"
  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
>
  Explore Services
</a>
<a
  href="#contact"
  className="rounded-xl border border-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-500"
>
  Contact Us
</a>
</div>
      </section>
      <section className="bg-black py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-orange-500">
      Featured Houses
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-12">
      Find affordable hostels and rentals around Chuka University.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <img
          src="https://placehold.co/600x400?text=Bedsitter"
          alt="Bedsitter"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold">Bedsitter</h3>

          <p className="text-orange-500 text-xl mt-2">
            KSh 4,500 / Month
          </p>

          <p className="mt-3 text-gray-400">
            5 minutes from Chuka University.
          </p>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl">
            View House
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <img
          src="https://placehold.co/600x400?text=One+Bedroom"
          alt="One Bedroom"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold">One Bedroom</h3>

          <p className="text-orange-500 text-xl mt-2">
            KSh 7,500 / Month
          </p>

          <p className="mt-3 text-gray-400">
            Spacious and secure apartment.
          </p>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl">
            View House
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <img
          src="https://placehold.co/600x400?text=Student+Hostel"
          alt="Student Hostel"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold">Student Hostel</h3>

          <p className="text-orange-500 text-xl mt-2">
            KSh 3,800 / Month
          </p>

          <p className="mt-3 text-gray-400">
            Affordable rooms with free Wi-Fi.
          </p>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl">
            View House
          </button>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="bg-black py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-orange-500">
      About Mainswitch Mcoasty
    </h2>

    <p className="mt-6 text-gray-400 leading-8">
      Mainswitch Mcoasty is a trusted student service hub around
      Chuka University. We help students and the surrounding
      community with cyber services, laundry, house hunting,
      digital marketing, blogging and quality second-hand deals.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="rounded-2xl bg-zinc-900 p-6">
        <h3 className="text-xl font-bold text-orange-500">
          Student Focused
        </h3>
        <p className="mt-3 text-gray-400">
          Affordable services designed for university students.
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900 p-6">
        <h3 className="text-xl font-bold text-orange-500">
          Trusted
        </h3>
        <p className="mt-3 text-gray-400">
          Reliable, honest and professional service delivery.
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900 p-6">
        <h3 className="text-xl font-bold text-orange-500">
          Local Experts
        </h3>
        <p className="mt-3 text-gray-400">
          Based around Chuka University and serving the local community.
        </p>
      </div>

    </div>
  </div>
</section>
      <section
  id="services"
  className="bg-zinc-950 py-20 px-6"
>
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["💻 Cyber Services","Printing, KRA, HELB, eCitizen, CVs and more."],
            ["🧺 Laundry Services","Affordable washing and ironing."],
            ["🏠 House Hunting","Hostels, bedsitters and rentals."],
            ["📱 Digital Marketing","Social media and business promotion."],
            ["📰 Blogging & Journalism","Campus stories and content creation."],
            ["♻️ Second-Hand Deals","Buy and sell student essentials."]
          ].map(([t,d])=>(
            <div key={t} className="rounded-2xl border border-zinc-800 bg-black p-6">
              <h3 className="text-xl font-bold text-orange-500">{t}</h3>
              <p className="mt-3 text-gray-400">{d}</p>
            </div>
          ))}
        </div>
      </section>
<section className="bg-zinc-950 py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h2 className="text-5xl font-bold text-orange-500">500+</h2>
      <p className="mt-2 text-gray-400">Happy Students</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold text-orange-500">6</h2>
      <p className="mt-2 text-gray-400">Core Services</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold text-orange-500">24/7</h2>
      <p className="mt-2 text-gray-400">Support</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold text-orange-500">100%</h2>
      <p className="mt-2 text-gray-400">Commitment</p>
    </div>

  </div>
</section>
      <section
  id="contact"
  className="bg-black py-20 px-6"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-orange-500">
      Contact Mainswitch Mcoasty
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-12">
      We'd love to hear from you. Reach out for cyber services, laundry,
      house hunting, digital marketing, blogging, or second-hand deals.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
        <h3 className="text-2xl font-bold text-orange-500">
          📞 Call Us
        </h3>

        <p className="mt-4 text-gray-300">
          0700 614 387
        </p>

        <a
          href="tel:+254700614387"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
        >
          Call Now
        </a>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
        <h3 className="text-2xl font-bold text-orange-500">
          💬 WhatsApp
        </h3>

        <p className="mt-4 text-gray-300">
          Chat with us anytime.
        </p>

        <a
          href="https://wa.me/254700614387"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
        >
          Open WhatsApp
        </a>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl text-center border border-zinc-800">
        <h3 className="text-2xl font-bold text-orange-500">
          📧 Email
        </h3>

        <p className="mt-4 text-gray-300 break-all">
          mainswitch0001@gmail.com
        </p>

        <a
          href="mailto:mainswitch0001@gmail.com"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Send Email
        </a>
      </div>

    </div>

    <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800">

      <h3 className="text-3xl font-bold text-orange-500">
        📍 Our Location
      </h3>

      <p className="mt-4 text-gray-300">
        Around Chuka University, Chuka, Kenya
      </p>

      <p className="mt-2 text-gray-500">
        Serving students and the surrounding community with reliable,
        affordable and professional services.
      </p>

    </div>

  </div>
      </section>
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

    <div>
      <h3 className="text-2xl font-bold">
        <span className="text-orange-500">Mainswitch</span>{" "}
        <span className="text-blue-500">Mcoasty</span>
      </h3>

      <p className="mt-4 text-gray-400">
        Your trusted student service hub around Chuka University.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-orange-500">
        Services
      </h4>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>Cyber Services</li>
        <li>Laundry</li>
        <li>House Hunting</li>
        <li>Digital Marketing</li>
        <li>Second-Hand Deals</li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold text-orange-500">
        Contact
      </h4>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>📞 0700 614 387</li>
        <li>📧 mainswitch0001@gmail.com</li>
        <li>📍 Chuka University</li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold text-orange-500">
        Business Hours
      </h4>

      <ul className="mt-4 space-y-2 text-gray-400">
        <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
        <li>Saturday: 9:00 AM - 6:00 PM</li>
        <li>Sunday: By Appointment</li>
      </ul>
    </div>

  </div>

  <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">
    © {new Date().getFullYear()} Mainswitch Mcoasty. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}
