"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-5xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Some of the work I’ve built using modern technologies
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          
          {/* PROJECT 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold">LMS Project</h3>

            <p className="mt-4 text-gray-400">
              A full stack Learning Management System with authentication,
              course management, and database integration using Java and MySQL.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">Java</span>
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">MySQL</span>
            </div>

            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/rk4790385-png/LMS-project"
                target="_blank"
                className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Java Mini Projects</h3>

            <p className="mt-4 text-gray-400">
              A collection of logic-based Java applications including pattern
              problems and problem-solving tasks.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">Java</span>
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-800 text-sm rounded">MySQL</span>
            </div>

            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/rk4790385-png/Matrimony"
                target="_blank"
                className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}