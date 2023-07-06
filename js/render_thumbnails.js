import {GenerateData } from './util.js'

const mockData = GenerateData()
const imgTemplate = document.querySelector("#picture").content.querySelector(".picture");
const imgContainer = document.querySelector(".pictures");

function createThumbs() {
  mockData.map(({ url, likes, comments }) => {
    const usrImg = imgTemplate.cloneNode(true);
    usrImg.querySelector(".picture__img").src = url;
    usrImg.querySelector(".picture__likes").textContent = likes;
    usrImg.querySelector(".picture__comments").textContent = comments.length;
    imgContainer.appendChild(usrImg);
  });
}

createThumbs();

export {createThumbs}