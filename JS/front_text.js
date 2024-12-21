
  const text = "基隆是......";
  const container = document.getElementById("front_text");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      container.textContent += text[index];
      index++;
      setTimeout(typeEffect, 100); // 每個字出現的時間
    }
  }
  typeEffect();
//  id="front_text"