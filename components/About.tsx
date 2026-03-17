"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-28 px-6 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold">About Me</h2>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          I am a passionate Full Stack Developer specializing in Java, React, and MySQL.
          I focus on building scalable, efficient, and user-friendly web applications
          with clean architecture and modern design.
        </p>
      </div>
    </motion.section>
  );
}