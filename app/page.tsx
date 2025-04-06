import EmailForm from "@/components/EmailForm";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-emerald-200 relative overflow-hidden">
          <Image
            src="/screenshot_explore-portrait.png"
            alt="Munch App Screenshot"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
          {/* <Image
            src="/screenshot_account-portrait.png"
            alt="Munch App Screenshot"
            fill
            className="object-contain mt-8 md:mt-10 px-14 object-bottom"
          /> */}
        </div>

        <main className="flex flex-col gap-8 mt-4 md:justify-center px-6 pb-10">
          <p className="p-2 border-gray-300 border-2 rounded-full font-medium text-gray-400 w-60 text-center text-sm">
            COMING SOON FOR LONDON
          </p>
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            {/* <span className="text-red-500">Find</span> + <span className="text-purple-500">share</span> the best{" "}
            <span className="text-emerald-500">حلال</span> restaurants in London */}
            Find the best حلال restaurants. Share with your friends.
          </h1>
          <p className="text-gray-500">Join the waitlist to get early access when our app is available!</p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
