import EmailForm from "@/components/EmailForm";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:h-full h-[400px] bg-[#E8E0FA] relative overflow-hidden">
          <Image
            src="/app-mockup.png"
            alt="Munch Mobile App"
            fill
            className="object-contain px-14 pt-10 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-4 md:gap-8 mt-4 md:justify-center px-6 pb-10">
          <p className="p-2 border-gray-300 border-2 rounded-full font-medium text-gray-400 w-60 text-center text-sm">
            🚀 COMING SOON FOR LONDON
          </p>
          <h1 className="font-semibold tracking-tight text-zinc-900 text-2xl leading-tight md:text-3xl max-w-lg">
            {/* <span className="text-red-500">Find</span> + <span className="text-purple-500">share</span> the best{" "}
            <span className="text-emerald-500">حلال</span> restaurants in London */}
            🔎 <span>Discover</span> the best حلال restaurants.
            <br />
            🌐 <span>Share</span> with your friends.
          </h1>
          <p className="text-gray-500">Join the waitlist to get early access when our app is available!</p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
