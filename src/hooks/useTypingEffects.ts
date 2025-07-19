"use client";

import { useEffect, useState } from "react";

const useTypingEffect = (texts: string[], typingSpeed = 100): string => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const text = texts[currentIndex];
    if (!isDeleting && currentText === text) {
      setPause(true);
      return;
    }
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);

      return;
    }
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => prev + text[prev.length]);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentIndex, texts, typingSpeed, pause]);
  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => {
        setPause(false);
        setIsDeleting(true);
      }, 1000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [pause]);

  return currentText;
};

export default useTypingEffect;
