import { useState, useEffect } from "react";

const useTypeWriter = (text, delay, infinite = false) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return currentText;
};

export default useTypeWriter;
