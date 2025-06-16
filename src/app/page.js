import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://wallpapercave.com/wp/wp12583140.jpg"
          alt="Botnix Cloud Logo"
          fill
          priority
          sizes="100vw" // use "100vw" instead of "100%" for better resolution hints
          className="object-cover brightness-[60%]"
          draggable={false}
        />
      </div>
      <div>
        <h2 className="text-center text-white text-3xl font-bold ">
          What Botnix Cloud Offers?
        </h2>
      </div>
    </div>
  );
}
