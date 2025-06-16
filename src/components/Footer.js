import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
const links = [
  {
    name: "Hosting Rules",
    href: "/rules",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms of Service",
    href: "/terms",
  },
  {
    name: "Refund Policy",
    href: "/refund",
  },
  {
    name: "Discord",
    href: "https://discord.gg/botnixcloud",
  },
];

export default function Footer() {
  const h4css = "text-2xl font-bold flex items-center mb-3";
  return (
    <footer className="bg-[#131313] py-12 px-32 text-white">
      <div className="flex pb-12">
        <div className="w-full">
          <h4 className={h4css}>Botnix Cloud</h4>
          <p className="text-gray-400 text-md pr-12">
            Cloud platform that provides a range of services including virtual
            machines, storage, and networking solutions.
          </p>
        </div>
        <div className="w-full">
          <h4 className={h4css}>Links</h4>
          <ul className="text-gray-400 text-md pr-12 flex flex-wrap">
            {links.map((link) => (
              <li key={link.name} className="mb-2 w-1/2">
                <Link
                  href={link.href}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h4 className={h4css}>Store</h4>
          <p className="text-gray-400 text-md pr-12">
            Check out our store to purchase VPS, Bot Hosting, Game Servers, and
            more!
          </p>
          <Link href="https://billing.botnix.cloud" target="_blank">
            <button className="bg-gradient-to-r from-orange-500 via-red-600 to-purple-700 px-6 py-3 font-semibold text-sm rounded-md mt-4 flex items-center gap-2 cursor-pointer hover:brightness-110 transition-all duration-300 hover:scale-105 text-white shadow-md">
              Shop Now <FaCartShopping className="inline-block" />
            </button>
          </Link>
        </div>
      </div>
      <hr className="border border-neutral-800" />
      <div>
        <p className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Botnix Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
