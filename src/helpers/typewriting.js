export const typewriterEffect = (
  element,
  text1,
  text2,
  delay = 50,
  cursor = true
) => {
  let currentIndex = 0;
  let isTyping = true;

  const type = () => {
    if (isTyping && currentIndex <= text1.length + text2.length) {
      let currentText = "";

      if (currentIndex < text1.length) {
        currentText = text1.slice(0, currentIndex + 1);
      } else {
        currentText =
          text1 +
          `<span class="text-blueHeading font-MontserratBold">${text2.slice(
            0,
            currentIndex - text1.length + 1
          )}</span>`;
      }

      element.innerHTML = `${currentText}<span class="blinking-cursor">|</span>`;

      currentIndex++;
      setTimeout(type, delay);
    } else {
      // Pause before restarting the typing effect
      setTimeout(() => {
        currentIndex = 0;
        element.innerHTML = ""; // Clear the element before starting over
        type(); // Restart the typing effect
      }, 1000); // Delay before restarting (1 second)
    }
  };

  const blinkCursor = () => {
    setInterval(() => {
      const cursorElement = element.querySelector(".blinking-cursor");
      if (cursorElement) {
        cursorElement.style.visibility =
          cursorElement.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 500);
  };

  type();
  if (cursor) blinkCursor();
};
