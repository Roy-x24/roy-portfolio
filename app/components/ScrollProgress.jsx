"use client";
import { useEffect, useState } from "react";

// Barra superior que muestra cuánto has avanzado en la página.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
