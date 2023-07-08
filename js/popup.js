import { generatedData } from "./util.js";

const popup = document.querySelector(".big-picture");
const popup_close_btn = popup.querySelector(".big-picture__cancel");
const likes_counter = popup.querySelector(".social__comment-count");
const comments_loader = popup.querySelector(".comments-loader");
const popup_img = popup.querySelector(".big-picture__img img");
const popup_likes = popup.querySelector(".likes-count");
const popup_description = popup.querySelector(".social__caption");
const popup_comments = popup.querySelector(".comments-count");
const popup_comments_list = popup.querySelector(".social__comments");
const thumbnails = document.querySelector(".pictures");

function renderComments(avatar, name, message) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  li.classList.add("social__comment");
  img.classList.add("social__picture");
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;
  p.classList.add("social__text");
  p.textContent = message;
  li.append(img, p);
  return li;
}

function renderPopup(evt) {
  likes_counter.classList.add("hidden");
  comments_loader.classList.add("hidden");
  document.querySelector("body").classList.add("modal-open");
  generatedData.forEach(({ id, url, likes, comments, description }) => {
    if (evt.target.dataset.id == id) {
      popup_img.src = url;
      popup_img.alt = description;
      popup_description.textContent = description;
      popup_likes.textContent = likes;
      popup_comments.textContent = comments.length;
      popup_comments_list.innerHTML = "";
      generatedData[id - 1].comments.map(({ avatar, name, message }) => {
        popup_comments_list.append(renderComments(avatar, name, message));
      });
    }
  });
}

function ShowPopup(evt) {
  if (evt.target.tagName == "IMG") {
    popup.classList.remove("hidden");
    renderPopup(evt);
  }
  document.addEventListener("keydown", HidePopup);
  popup_close_btn.addEventListener("click", HidePopup);
}

function HidePopup(evt) {
  if (evt.key == "Escape" || evt.target.id == "picture-cancel") {
    popup.classList.add("hidden");
    popup_close_btn.removeEventListener("click", HidePopup);
    document.removeEventListener("keydown", HidePopup);
  }
}

thumbnails.addEventListener("click", ShowPopup);

export { ShowPopup };
