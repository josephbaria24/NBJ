"use client";

import Image from "next/image";
import "../../app/globals.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Stars from "../assets/Three/star";

// Dynamically import the components that use browser APIs
const DynamicChaos = dynamic(
  () => import("../assets/Three/Chaos"),
  { ssr: false, loading: () => <div>Loading visual effects...</div> }
);

const DynamicGlobe = dynamic(
  () => import("../assets/Three/Globe"),
  { ssr: false, loading: () => <div>Loading globe...</div> }
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client before rendering browser-dependent components
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* First Section with Chaos Effect */}
      <div className="relative flex flex-col min-h-screen">
        {isClient && <DynamicChaos />}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-4xl font-bold sm:text-5xl font-geist-sans tracking-tighter text-white">
            NothingBut.jsph
          </h1>
          <p className="text-sml text-gray mt-0 font-geist-sans">
            Lost in the web, found in the code.
          </p>
        </main>
      </div>

      {/* Third Section with Galaxy Star Effect */}
      <div className="relative flex flex-col min-h-screen">
        {isClient && (
          <div className="absolute inset-0 z-0">
            <Stars />
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <main className="flex-grow flex flex-col items-center justify-center text-center relative z-20">
          <h2 className="text-3xl font-bold sm:text-4xl font-geist-sans tracking-tighter">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mt-4 font-geist-sans">
            Hey, I&apos;m <span className="text-white font-semibold">Joseph</span>—a nub web & mobile app developer. I know some in{" "}
            <span className="text-white font-semibold">Next.js, React, Three.js, Flutter</span>, and more. I love minimal designs with
            immersive web experiences. Currently exploring 3D web development and real-time interactions.
          </p>
        </main>
      </div>

      {/* Second Section with Globe Background */}
      <div className="relative flex flex-col min-h-screen">
        {/* Ensure Globe covers the entire screen */}
        {isClient && (
          <div className="absolute inset-0 z-0">
            <DynamicGlobe />
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content for Second Page */}
        <main className="flex-grow flex flex-col items-center justify-center text-center relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl">
            {/* Card 1 - RentConnect App */}
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/15 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center">
                <Image src="/rc.png" width={150} height={100} alt="Project 1" className="rounded-md" />
              </div>

              <h3 className="text-md font-semibold mt-2 text-white">RentConnect App</h3>
              <p className="text-xs text-gray-300">
                A comprehensive app for landlords and tenants, built with Flutter.
              </p>
              <a
                href="https://apkpure.com/rentconnect/com.example.rentcon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>

            {/* Card 2 - Real-time Chat App */}
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/15 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center">
                <Image src="/educare.png" width={120} height={80} alt="Project 2" className="rounded-md" />
              </div>

              <h3 className="text-md font-semibold mt-2 text-white">Real-time Chat App</h3>
              <p className="text-xs text-gray-300">
                My first react mini portfolio for case study.
              </p>
              <a
                href="https://educare-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>

            {/* Card 3 - Add a New Project Here */}
            {/* <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/15 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center">
                <Image src="/project3.png" width={250} height={150} alt="Project 3" className="rounded-md" />
              </div>

              <h3 className="text-md font-semibold mt-2 text-white">New Project</h3>
              <p className="text-xs text-gray-300">
                Another cool project that showcases my skills!
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div> */}
          </div>
        </main>

        {/* Footer - Pushed to the Bottom */}
        <footer className="flex gap-6 flex-wrap items-center justify-center p-4 relative z-10 text-white">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:josephbaria89@gmail.com?subject=Let's%20Connect&body=Hi%20Joseph,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
          >
            <Image src="/email.svg" alt="email icon" width={16} height={16} />
            Email
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.svg" alt="github icon" width={16} height={16} />
            GitHub
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.facebook.com/joseph.baria.24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/fb.svg" alt="FB icon" width={16} height={16} />
            Facebook
          </a>
        </footer>
      </div>
    </div>
  );
}