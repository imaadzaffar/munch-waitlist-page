"use client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { toast } from "react-hot-toast";

const supabase = createClient(
  "https://tdvlgijqbwsgoyzfdkma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkdmxnaWpxYndzZ295emZka21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NzA0MjUsImV4cCI6MjA1NzE0NjQyNX0.P5eXqXLpuxIuUSLBBZYtsnRNRTrjxl2Hr9qJSdr5FW8"
);

export default function EmailForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, email, platform);

    const { data, error } = await supabase.from("waitlist").insert([{ name, email, platform }]);

    if (!error) {
      setName("");
      setEmail("");
      setPlatform("");
      toast.success("Thank you for joining our waitlist! 🚀");
    } else {
      setName("");
      setEmail("");
      setPlatform("");
      console.error(error);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="mt-2 md:max-w-sm">
        <div className="flex flex-col gap-2">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            autoComplete="name"
            className="text-accent-500 block h-10 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            id="name"
            name="name"
            placeholder="Mufti Menk"
            required
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <label className="sr-only" htmlFor="email-address">
            Email address
          </label>
          <input
            autoComplete="email"
            className="text-accent-500 block h-10 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="email-address"
            name="email"
            placeholder="mufti@menk.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />

          <label className="sr-only" htmlFor="platform">
            Platform
          </label>
          <select
            id="platform"
            name="platform"
            className="text-accent-500 block h-10 w-full appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            value={platform}
            onChange={handlePlatformChange}
            required
          >
            <option value="" disabled selected>
              Select platform
            </option>
            <option value="android">Android</option>
            <option value="ios">iOS</option>
          </select>

          <button
            className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-green-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-950"
            type="submit"
          >
            <span>I'm interested!</span>
          </button>
        </div>
      </form>

      {/* <div className="flex items-start gap-2 text-gray-500">
        <InfoCircledIcon />
        <p className="text-xs -mt-[0.5] max-w-sm">
          No worries! your data is completely safe and will only be utilised to provide you with updates about our
          product.
        </p>
      </div> */}
    </>
  );
}
