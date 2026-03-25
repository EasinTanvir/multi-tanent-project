import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-black px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide cursor-pointer">
        Multi Tenant Nav
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
