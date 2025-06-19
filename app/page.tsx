import HalalIcon from "@/components/HalalIcon";
import { CakeSliceIcon, FishIcon, HamburgerIcon, PizzaIcon, VeganIcon } from "lucide-react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { FaApple, FaAndroid, FaLeaf } from "react-icons/fa";
import { FaShrimp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:h-full h-[400px] bg-green-100 relative overflow-hidden">
          <Image
            src="/app-mockup.png"
            alt="Munch Mobile App"
            fill
            className="object-contain px-4 md:px-14 pt-10 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-4 md:gap-8 mt-4 md:justify-center px-6 pb-10">
          <div className="text-gray-500 flex items-center gap-2">
            <PizzaIcon size={40} color="#b1b1b1" />
            {/* <FishIcon size={40} color="#b1b1b1" /> */}
            <HamburgerIcon size={40} color="#b1b1b1" />
            <CakeSliceIcon size={40} color="#b1b1b1" />
            <VeganIcon size={40} color="#b1b1b1" />
            <HalalIcon size={40} color="#b1b1b1" strokeWidth={2.5} />
          </div>
          <h1 className="font-semibold tracking-tight text-zinc-900 text-2xl leading-tight md:text-4xl max-w-lg">
            🔎 <span className="text-green-700">Discover</span> top restaurants.
            <br />
            ❤️ <span className="text-red-700">Save</span> your favourites.
            <br />
            🌐 <span className="text-blue-700">Share</span> with friends.
            <br />
          </h1>
          <p className="text-gray-500 text-lg">
            Join Munch <b>(beta)</b> and try now!
          </p>

          <div className="flex gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.zafaris.munch"
              className="p-2 border-gray-400 border-2 rounded-full font-medium text-gray-500 text-lg w-60 text-center flex items-center justify-center"
            >
              <div className="flex items-center gap-2">
                <FaAndroid />
                <span>Android</span>
              </div>
            </a>
            <a
              href="https://testflight.apple.com/join/5zm4KwMH"
              className="p-2 border-gray-400 border-2 rounded-full font-medium text-gray-500 text-lg w-60 text-center flex items-center justify-center"
            >
              <div className="flex items-center gap-2">
                <FaApple />
                <span>iOS</span>
              </div>
            </a>
          </div>
        </main>
      </section>
    </>
  );
}
