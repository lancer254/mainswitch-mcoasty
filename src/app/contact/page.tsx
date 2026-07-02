export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500">
          Contact Us
        </h1>

        <p className="text-center text-gray-400 mt-6">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-orange-500">
              📞 Phone
            </h2>

            <p className="mt-4">
              0700 614 387
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-orange-500">
              📧 Email
            </h2>

            <p className="mt-4">
              mainswitch0001@gmail.com
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-orange-500">
              📍 Location
            </h2>

            <p className="mt-4">
              Chuka University, Kenya
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}