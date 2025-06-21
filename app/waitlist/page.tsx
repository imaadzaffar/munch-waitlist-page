import EmailForm from "@/components/EmailForm";
import HalalIcon from "@/components/HalalIcon";
import {
  BeefIcon,
  CakeSliceIcon,
  DrumstickIcon,
  FishIcon,
  ForkKnifeIcon,
  HamburgerIcon,
  IceCreamBowlIcon,
  PizzaIcon,
  SaladIcon,
  UtensilsCrossedIcon,
  VeganIcon,
} from "lucide-react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:h-full h-[400px] bg-green-100 relative overflow-hidden">
          <Image
            src="/app-mockup-v2.png"
            alt="Munch Mobile App"
            fill
            className="object-contain px-4 md:px-14 pt-10 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-4 md:gap-8 mt-4 md:justify-center px-6 pb-10">
          <p className="p-2 border-gray-300 border-2 rounded-full font-medium text-gray-400 w-60 text-center text-sm">
            🚀 APP COMING SOON
          </p>
          <h1 className="font-semibold tracking-tight text-zinc-900 text-2xl leading-tight md:text-4xl max-w-lg">
            <div className="flex items-center gap-2">
              🔎 <span className="text-green-700">Discover</span>
              <HalalIcon size={30} color="rgb(21,128,61)" strokeWidth={2} /> restaurants.
            </div>
            ❤️ <span className="text-red-700">Save</span> your favourites.
            <br />
            🌐 <span className="text-blue-700">Share</span> with friends.
          </h1>
          <div className="text-gray-500 flex w-full items-center justify-center gap-5">
            <UtensilsCrossedIcon size={20} color="rgb(107,114,128)" />
            <PizzaIcon size={20} color="rgb(107,114,128)" />
            <HamburgerIcon size={20} color="rgb(107,114,128)" />
            <BeefIcon size={20} color="rgb(107,114,128)" />
            <SaladIcon size={20} color="rgb(107,114,128)" />
            <IceCreamBowlIcon size={20} color="rgb(107,114,128)" />
            <CakeSliceIcon size={20} color="rgb(107,114,128)" />
          </div>
          <p className="text-gray-500">Join the waitlist to get early access when our app is available!</p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
