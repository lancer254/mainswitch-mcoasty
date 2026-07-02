
export default function HousesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500">
          Featured Houses
        </h1>

        <p className="text-center text-gray-400 mt-6 mb-12">
          Find affordable houses around Chuka University.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/600x400?text=Bedsitter"
              alt="Bedsitter"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Bedsitter</h2>

              <p className="text-orange-500 text-xl mt-2">
                KSh 4,500 / Month
              </p>

              <p className="mt-3 text-gray-400">
                5 minutes from Chuka University.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/600x400?text=One+Bedroom"
              alt="One Bedroom"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">One Bedroom</h2>

              <p className="text-orange-500 text-xl mt-2">
                KSh 7,500 / Month
              </p>

              <p className="mt-3 text-gray-400">
                Spacious and secure apartment.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/600x400?text=Student+Hostel"
              alt="Student Hostel"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">Student Hostel</h2>

              <p className="text-orange-500 text-xl mt-2">
                KSh 3,800 / Month
              </p>

              <p className="mt-3 text-gray-400">
                Affordable rooms with free Wi-Fi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}