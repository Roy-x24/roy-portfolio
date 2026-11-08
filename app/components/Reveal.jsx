"use client";
import { useEffect, useRef, useState } from "react";

// Hace aparecer a su contenido con una animación cuando entra al viewport.
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--delay": `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
