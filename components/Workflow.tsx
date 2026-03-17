"use client";
import { motion } from "framer-motion";

export default function Workflow() {
  const steps = [
    {
      title: "01. Code",
      subtitle: "Development",
      description: "Next.js + TypeScript with clean architecture for scalable apps.",
    },
    {
      title: "02. Containerize",
      subtitle: "Docker",
      description: "Optimized multi-stage builds for small, efficient images.",
    },
    {
      title: "03. Orchestrate",
      subtitle: "Kubernetes",
      description: "Self-healing pods & load-balanced services for reliability.",
    },
    {
      title: "04. Deploy",
      subtitle: "Production",
      description: "Automated CI/CD pipelines with monitoring and alerts.",
    },
  ];

  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My DevOps <span className="text-blue-500">Workflow</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-800 p-6 rounded-2xl hover:bg-gray-900 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-500">{step.title}</h3>
              <h4 className="text-lg mt-1 text-gray-300">{step.subtitle}</h4>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}