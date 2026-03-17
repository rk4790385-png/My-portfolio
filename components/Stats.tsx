"use client";

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        <div>
          <h2 className="text-4xl font-bold text-blue-500">10+</h2>
          <p className="text-gray-400">Projects</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-500">1+</h2>
          <p className="text-gray-400">Years Learning</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-500">8+</h2>
          <p className="text-gray-400">Technologies</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-500">∞</h2>
          <p className="text-gray-400">Learning</p>
        </div>

      </div>
    </section>
  );
}