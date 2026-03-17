"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    // ✅ CLEAR FORM AFTER SUBMIT
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            rows={5}
            required
          />

          <button className="bg-blue-500 py-4 rounded-lg hover:bg-blue-600 transition w-full text-lg font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}