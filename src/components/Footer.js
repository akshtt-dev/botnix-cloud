import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const links = [
  {
    name: "Hosting Rules",
    href: "/hosting-rules",
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
  const h4css = "text-xl font-bold flex items-center mb-3 text-white";

  return (
    <footer className="bg-[#131313] text-white px-6 sm:px-10 lg:px-36 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12">
        <div>
          <h4 className={h4css}>Botnix Cloud</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cloud platform that provides a range of services including virtual
            machines, storage, and networking solutions.
          </p>
        </div>

        <div>
          <h4 className={h4css}>Links</h4>
          <ul className="text-gray-400 text-sm grid grid-cols-2 gap-2">
            {links.map((link) => (
              <li key={link.name}>
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

        {/* Store CTA */}
        <div>
          <h4 className={h4css}>Store</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Check out our store to purchase VPS, Bot Hosting, Game Servers, and
            more!
          </p>
          <Link href="https://billing.botnix.cloud" target="_blank">
            <button className="bg-gradient-to-r from-orange-500 via-red-600 to-purple-700 px-6 py-3 font-semibold text-sm rounded-md mt-4 flex items-center gap-2 hover:brightness-110 hover:scale-105 transition-all duration-300 text-white shadow-md">
              Shop Now <FaCartShopping className="inline-block" />
            </button>
          </Link>
        </div>
      </div>

      <hr className="border-neutral-800" />
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Botnix Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
