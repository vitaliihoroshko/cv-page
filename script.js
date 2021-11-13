"use strict";

const homeBtn = document.querySelector(".home-btn");
const workingBtn = document.querySelector(".working-btn");
const educationBtn = document.querySelector(".education-btn");
const skilsBtn = document.querySelector(".skils-btn");

const homeInfo = document.querySelector(".home-info");
const workingInfo = document.querySelector(".working-info");
const educationInfo = document.querySelector(".education-info");
const skilsInfo = document.querySelector(".skils-info");

homeBtn.addEventListener("click", () => {
   homeInfo.style.display = "flex";
   workingInfo.style.display = "none";
   educationInfo.style.display = "none";
   skilsInfo.style.display = "none";
});

workingBtn.addEventListener("click", () => {
   homeInfo.style.display = "none";
   workingInfo.style.display = "block";
   educationInfo.style.display = "none";
   skilsInfo.style.display = "none";
});

educationBtn.addEventListener("click", () => {
   homeInfo.style.display = "none";
   workingInfo.style.display = "none";
   educationInfo.style.display = "block";
   skilsInfo.style.display = "none";
});

skilsBtn.addEventListener("click", () => {
   homeInfo.style.display = "none";
   workingInfo.style.display = "none";
   educationInfo.style.display = "none";
   skilsInfo.style.display = "flex";
});