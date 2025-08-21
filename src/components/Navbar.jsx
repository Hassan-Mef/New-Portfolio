import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About Me' },
    { to: 'services', label: 'Services' },
    { to: 'projects', label: 'Work' },
    { to: 'blogs', label: 'TechStack' },
    { to: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-md z-50 border-b-1 pt-2 pb-2 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Logo + Name */}
        <div className="flex items-left space-x-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <div>
            <h1 className="text-sm font-bold">Hassan Mef</h1>
            <p className="text-xs text-gray-400 -mt-1">Code Meets Creativity.</p>
          </div>
        </div>

        {/* Middle: Links (Hidden on small screens) */}
        <ul className="hidden lg:flex space-x-6 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

       

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
