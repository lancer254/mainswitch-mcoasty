export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          <span className="text-orange-500">Mainswitch</span>{" "}
          <span className="text-blue-500">Mcoasty</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Your trusted student service hub around Chuka University.
        </p>

        <p className="text-gray-500 mt-8">
          © {new Date().getFullYear()} Mainswitch Mcoasty. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}