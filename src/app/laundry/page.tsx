export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500">
          Laundry Services
        </h1>

        <p className="text-center text-gray-400 mt-6 mb-12">
          Affordable laundry services around Chuka University.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold">Basic Wash</h2>

            <p className="text-orange-500 text-4xl font-bold mt-6">
              KSh 200
            </p>

            <p className="mt-4 text-gray-400">
              Washing only.
            </p>
          </div>

          <div className="bg-orange-500 text-black p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Most Popular
            </h2>

            <p className="text-5xl font-bold mt-6">
              KSh 350
            </p>

            <p className="mt-4">
              Wash • Dry • Iron
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold">
              Premium Express
            </h2>

            <p className="text-orange-500 text-4xl font-bold mt-6">
              KSh 500
            </p>

            <p className="mt-4 text-gray-400">
              Same-day laundry service.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}