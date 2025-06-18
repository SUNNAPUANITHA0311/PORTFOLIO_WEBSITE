// script.js

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Enthusiastic Learner", "Dedicated Problem Solver", "Creative Developer"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typedText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      typing = false;
      setTimeout(type, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 80);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);

