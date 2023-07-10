import { generatedData } from "./mock-data.js";
import { ShowPopup } from "./popup.js";

const mockData = generatedData;
const imgTemplate = document.querySelector("#picture").content.querySelector(".picture");
const imgContainer = document.querySelector(".pictures");

const createThumbs = () =>  {
  mockData.map((data) => {
    const usrImg = imgTemplate.cloneNode(true);
    usrImg.querySelector(".picture__img").src = data.url;
    usrImg.querySelector(".picture__img").alt = data.description;
    usrImg.querySelector(".picture__img").dataset.id = data.id;
    usrImg.querySelector(".picture__likes").textContent = data.likes;
    usrImg.querySelector(".picture__comments").textContent = data.comments.length;
    imgContainer.appendChild(usrImg);
  });
}

createThumbs();

export { createThumbs };
