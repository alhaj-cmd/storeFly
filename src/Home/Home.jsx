import React, { useState } from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';



const menuItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Contact" }
];

const Home = () => {
    const [open, setOpen]= useState(false);

    return (
        <nav className="px-5 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Menu className="md:hidden" />
          <h2 className="text-xl font-bold">My Navbar</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {menuItems.map(route => (
            <Link key={route.id} route={route} />
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-3 rounded shadow">
          {menuItems.map(route => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      )}
    </nav>
    );
};

export default Home;