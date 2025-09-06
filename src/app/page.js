import Image from "next/image";
import Link from "next/link";
import { AiFillDiscord } from "react-icons/ai";
import { MdSecurity, MdAccessTime, MdCloudQueue, MdSpeed, MdSupport } from "react-icons/md";

export default function Home() {
  const features = [
    {
      title: "DDoS Protection",
      description: "Advanced Layer 4 & 7 mitigation to keep your services safe 24/7.",
      icon: <MdSecurity className="text-4xl text-[#FF4C4C]" />,
    },
    {
      title: "99.99% Uptime",
      description: "Highly available infrastructure with real-time monitoring.",
      icon: <MdAccessTime className="text-4xl text-[#00FFAB]" />,
    },
    {
      title: "Cloud Hosting",
      description: "Fast, scalable cloud servers tailored for your needs.",
      icon: <MdCloudQueue className="text-4xl text-[#4FC3F7]" />,
    },
    {
      title: "Blazing Speed",
      description: "NVMe SSDs and optimized networking ensure peak performance.",
      icon: <MdSpeed className="text-4xl text-yellow-400" />,
    },
    {
      title: "24/7 Support",
      description: "Our team is always here to help with any issue.",
      icon: <MdSupport className="text-4xl text-purple-400" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
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
          href="https://discord.gg/dj9xXj6vys"
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

      {/* Features Section */}
      <section className="bg-[#0e0e0e] py-16 px-4 sm:px-8">
        <h2 className="text-center text-white text-3xl font-bold mb-12">
          What Botnix Cloud Offers?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-red-500/20 group"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
