"use client";

import { useState } from "react";
import { MdHome, MdPeopleAlt, MdMenu, MdClose } from "react-icons/md";
import { RiComputerFill, RiBook2Fill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <MdHome className="inline-block" />,
  },
  {
    name: "Rules",
    href: "/rules",
    icon: <RiBook2Fill className="inline-block" />,
  },
  {
    name: "Panel",
    href: "https://panel.botnix.cloud",
    icon: <RiComputerFill className="inline-block" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <MdPeopleAlt className="inline-block" />,
  },
  {
    name: "Store",
    href: "https://billing.botnix.cloud",
    icon: <IoStorefront className="inline-block" />,
  },
  {
    name: "Status",
    href: "https://status.botnix.cloud",
    icon: <SlGraph className="inline-block" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white py-4 bg-[#0e0e0e]/80 backdrop-blur-md border-b border-white/10">
      <div className="px-6 sm:px-10 lg:px-36">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-[2px]">
              <div className="relative h-full w-full rounded-lg bg-[#0e0e0e]">
                <Image
                  src="/weblogo.png"
                  alt="Botnix Cloud Logo"
                  fill
                  priority
                  sizes="100%"
                  className="object-contain rounded-lg"
                  draggable={false}
                />
              </div>
            </div>
            <h1 className="hidden lg:block text-xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Botnix Cloud
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center font-medium text-gray-300 hover:text-blue-500 transition"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>{" "}
      {/* End inner flex container */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col gap-3 bg-[#0e0e0e]/90 border border-white/10 rounded-xl py-4 shadow-lg transition-all">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 px-2 py-2 rounded-md transition"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
