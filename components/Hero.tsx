"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white pt-20">

      {/* Badge */}
      <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
        Available for opportunities
      </span>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold mt-6"
      >
        K Raj
      </motion.h1>

      <h2 className="text-2xl text-blue-400 mt-2">
        Full Stack Developer
      </h2>

      <p className="mt-6 text-gray-400 max-w-xl">
        I build scalable web applications using Java, React, and MySQL.
        Passionate about clean code and real-world problem solving.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-lg">
          View Projects
        </a>

        <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-lg">
          Contact Me
        </a>
      </div>

    </section>
  );
}