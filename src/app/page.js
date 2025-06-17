import Image from "next/image";
import Link from "next/link";
import { AiFillDiscord } from "react-icons/ai";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://wallpapercave.com/wp/wp12583140.jpg"
          alt="Botnix Cloud Logo"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[60%]"
          draggable={false}
        />
        <Link
          href="https://discord.gg/botnixcloud"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e0e0e]/80 backdrop-blur-md shadow-lg border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-all duration-300"
        >
          <AiFillDiscord className="text-6xl text-[#5865F2] drop-shadow-lg" />
          <div className="flex flex-col items-start select-none">
            <span className="text-white text-2xl font-extrabold leading-tight">
              Botnix Cloud
            </span>
            <p className="text-gray-300 text-sm font-medium tracking-wide">
              discord.gg/botnixcloud
            </p>
          </div>
        </Link>
      </div>
      <div>
        <h2 className="text-center text-white text-3xl font-bold ">
          What Botnix Cloud Offers?
        </h2>
      </div>
    </div>
  );
}
