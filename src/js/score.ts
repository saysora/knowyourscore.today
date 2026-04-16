function calculateRead() {
  const content = document.getElementById("article")?.innerText;

  if (!content) return;

  const words = content.trim().split(/\s+/).length;

  const wpm = 255;

  const readTime = Math.ceil(words / wpm);

  // Spit out to element
  const readTimeElem = document.getElementById("readTime");

  if (!readTimeElem) return;

  readTimeElem.textContent = `${readTime} minute read`;
}

calculateRead();
