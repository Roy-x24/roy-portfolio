"use client";
import { useEffect, useState } from "react";

// Escribe y borra una lista de frases en bucle.
export default function Typewriter({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 35 : 70;

    if (!deleting && text === word) delay = 1600;
    else if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
