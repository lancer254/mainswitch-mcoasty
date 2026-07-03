export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">Mainswitch</span>{" "}
          <span className="text-blue-500">Mcoasty</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#houses" className="hover:text-orange-500">Houses</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </div>

      </div>
    </nav>
  );
}