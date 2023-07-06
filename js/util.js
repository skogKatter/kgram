import {COMMENTS,DESCRIPTION,NAMES,GetRandomNum,CreateId} from "./data.js";

let randomId = CreateId();
let urlId = CreateId();
let commentId = CreateId();

function GenerateComments() {
  return Array.from({ length: GetRandomNum(5, 25) }, () => ({
    id: commentId(),
    avatar: `img/avatar-${GetRandomNum(1, 6)}.svg`,
    message: COMMENTS[GetRandomNum(0, COMMENTS.length - 1)],
    name: NAMES[GetRandomNum(0, NAMES.length - 1)],
  }));
}

function GenerateData() {
  return Array.from({ length: 25 }, () => ({
    id: randomId(),
    url: `photos/${urlId()}.jpg`,
    description: DESCRIPTION[GetRandomNum(0, DESCRIPTION.length - 1)],
    likes: GetRandomNum(15, 200),
    comments: GenerateComments(),
  }));
}

export { GenerateComments, GenerateData };
