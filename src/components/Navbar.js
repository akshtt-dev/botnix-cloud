import { MdHome, MdPeopleAlt } from "react-icons/md";
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
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex text-white px-32 py-4 h-fit items-center bg-transparent">
      <div className="flex items-center gap-3 bg-[#0e0e0e]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-md select-none">
        {/* Logo with gradient ring */}
        <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-[2px]">
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

        {/* Gradient Text */}
        <h1 className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Botnix Cloud
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="mx-auto flex gap-4">
        {links.map((link) => (
          <li key={link.name} className="mr-4 flex items-center">
            <Link
              href={link.href}
              className="flex items-center font-medium text-lg hover:text-blue-500 text-gray-300"
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
