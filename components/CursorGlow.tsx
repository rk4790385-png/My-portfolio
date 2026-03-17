"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-72 h-72 bg-blue-500/20 rounded-full blur-3xl z-0"
      style={{
        top: position.y - 150,
        left: position.x - 150,
      }}
    />
  );
}