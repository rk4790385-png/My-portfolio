"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Java", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-28 px-6 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Skills
        </h2>

        <div className="mt-10 space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-blue-500 h-2 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}