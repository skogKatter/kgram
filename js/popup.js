import { generatedData } from "./mock-data.js";


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

const createComments = (avatar, name, message) => {
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

const createCommentsList = (id) => {
  generatedData[id].comments.map((data) => {
    popup_comments_list.append(createComments(data.avatar, data.name, data.message));
  });
}

const renderPopup = (evt) => {

  generatedData.forEach((data) => {
    if (evt.target.dataset.id == data.id) {
      let commentID = data.id - 1
      popup_img.src = data.url;
      popup_img.alt = data.description;
      popup_description.textContent = data.description;
      popup_likes.textContent = data.likes;
      popup_comments.textContent = data.comments.length;
      popup_comments_list.innerHTML = "";
     createCommentsList(commentID)
    }
  });
}

const ShowPopup = (evt) => {
  if (evt.target.tagName == "IMG") {
    document.querySelector("body").classList.add("modal-open");
    popup.classList.remove("hidden");
    renderPopup(evt);
  }
  document.addEventListener("keydown", HidePopup);
  popup_close_btn.addEventListener("click", HidePopup);
}

const HidePopup = (evt) => {
  if (evt.key == "Escape" || evt.target.id == "picture-cancel") {
    document.querySelector("body").classList.remove("modal-open");
    popup.classList.add("hidden");
    popup_close_btn.removeEventListener("click", HidePopup);
    document.removeEventListener("keydown", HidePopup);
  }
}

thumbnails.addEventListener("click", ShowPopup);

export { ShowPopup };
