function splitText(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.textContent;

    el.innerHTML = text
      .split("")
      .map(char => `<span>${char}</span>`)
      .join("");
  });
}

// splitText(".title");