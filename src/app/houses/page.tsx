export default function HousesPage() {
  const houses = [
    {
      image: "/houses/house1.jpeg",
      title: "Executive Bedsitter",
      price: "KSh 4,500 / Month",
      location: "Kibugua Estate - 5 min walk to Chuka University",
      status: "Available",
    },
    {
      image: "/houses/house2.jpeg",
      title: "Modern Bedsitter",
      price: "KSh 5,000 / Month",
      location: "Chuka Town",
      status: "Available",
    },
    {
      image: "/houses/house3.jpeg",
      title: "Single Room",
      price: "KSh 3,500 / Month",
      location: "Near Main Gate",
      status: "Available",
    },
    {
      image: "/houses/house4.jpeg",
      title: "One Bedroom Apartment",
      price: "KSh 7,500 / Month",
      location: "Ndagani",
      status: "Available",
    },
    {
      image: "/houses/house5.jpeg",
      title: "Executive Studio",
      price: "KSh 6,000 / Month",
      location: "Ndagani",
      status: "Available",
    },
    {
      image: "/houses/house6.jpeg",
      title: "Student Hostel",
      price: "KSh 3,800 / Month",
      location: "Behind Chuka University",
      status: "Available",
    },
    {
      image: "/houses/house7.jpeg",
      title: "Modern Apartment",
      price: "KSh 8,500 / Month",
      location: "Chuka Town",
      status: "Available",
    },
    {
      image: "/houses/house8.jpeg",
      title: "Two Bedroom",
      price: "KSh 12,000 / Month",
      location: "Kibugua",
      status: "Available",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500">
          Featured Houses
        </h1>

        <p className="text-center text-gray-400 mt-6 mb-12">
          Find your next home around Chuka University.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {houses.map((house, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold">
                  {house.title}
                </h2>

                <p className="text-orange-500 text-lg mt-2 font-semibold">
                  {house.price}
                </p>

                <p className="text-gray-400 mt-3">
                  📍 {house.location}
                </p>

                <span className="inline-block mt-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ✅ {house.status}
                </span>

                <a
                  href="https://wa.me/254700614387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 bg-green-600 hover:bg-green-700 text-center py-3 rounded-xl font-semibold transition"
                >
                  Book Viewing
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}