export default function About() {
  return (
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
  );
}