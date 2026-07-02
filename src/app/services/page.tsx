export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold text-orange-500 text-center">
          Our Services
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Everything Mainswitch Mcoasty offers around Chuka University.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">💻 Cyber Services</h2>
            <p className="mt-3 text-gray-400">
              Printing, photocopying, CV writing, KRA, HELB,
              eCitizen, passport applications and more.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">🧺 Laundry</h2>
            <p className="mt-3 text-gray-400">
              Washing, drying and ironing at student-friendly prices.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">🏠 House Hunting</h2>
            <p className="mt-3 text-gray-400">
              Find hostels, bedsitters and apartments near campus.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">📱 Digital Marketing</h2>
            <p className="mt-3 text-gray-400">
              Social media management and online promotions.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">📰 Blogging</h2>
            <p className="mt-3 text-gray-400">
              Campus news, articles and business promotions.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-500">♻️ Second-Hand Deals</h2>
            <p className="mt-3 text-gray-400">
              Buy and sell phones, furniture, electronics and more.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}