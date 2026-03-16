export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <h1 className="text-xl font-bold text-white">
          Uddan AI Solutions
        </h1>

        {/* Menu */}

        <div className="space-x-6 text-gray-300 hidden md:block">

          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#voice" className="hover:text-white">
            Voice Demo
          </a>

          <a href="#automation" className="hover:text-white">
            Automation
          </a>

          <a href="#portfolio" className="hover:text-white">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}