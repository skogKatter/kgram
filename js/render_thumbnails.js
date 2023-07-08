import {generatedData } from './util.js'
import { ShowPopup } from "./popup.js";


const mockData = generatedData; 
const imgTemplate = document.querySelector("#picture").content.querySelector(".picture");
const imgContainer = document.querySelector(".pictures");

function createThumbs() {
  mockData.map(({id, url, likes, comments , description }) => {
    const usrImg = imgTemplate.cloneNode(true);
    usrImg.querySelector(".picture__img").src = url;
    usrImg.querySelector(".picture__img").alt = description
      usrImg.querySelector(".picture__img").dataset.id = id;
    usrImg.querySelector(".picture__likes").textContent = likes;
    usrImg.querySelector(".picture__comments").textContent = comments.length;
    imgContainer.appendChild(usrImg);
  });
}

createThumbs();

export {createThumbs}