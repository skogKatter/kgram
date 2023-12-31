const COMMENTS = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const DESCRIPTION = [
  "Твой путь — путь волка, но путь не волк, если в тебе не ты.",
  "Вчера бухал, а сегодня я тут",
  "Я получил силу земли",
  "Делай как надо, как не надо не делай.",
  "Работа не волк, работа это ворк, а волк это ходить",
  "Лучше быть последним – первым, чем первым – последним.",
  "Если волк молчит то лучше его не перебивать.",
  "Делай как надо, как не надо не делай",
  "Не верь тому, кому не веришь, ведь вера в не веру рождает еще большее недоверие, чем доверие.",
];

const NAMES = [
  "Рада",
  "Любава",
  "Володара",
  "Мирослава",
  "Весна",
  "Рожана",
  "Милана",
  "Любомила",
  "Велеслава",
  "Владислава",
  "Зоряна",
  "Милослава",
  "Радигост",
  "Доброгост",
  "Миловид",
  "Владимил",
  "Ростислав",
  "Миролюб",
  "Яросвет",
  "Святобор",
  "Боримир",
  "Любомир",
  "Станислав",
  "Драгомир",
  "Борислав",
];

function GetRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateId(x) {
  return function () {
    return (x += 1);
  };
}

let randomId = CreateId(0);
let urlId = CreateId(0);
let commentId = CreateId(0);

const Data = [];

function GenerateComments() {
  return Array.from({ length: GetRandomNum(5, 25) }, () => ({
    id: commentId(),
    avatar: `img/avatar-${GetRandomNum(1, 6)}.svg`,
    message: COMMENTS[GetRandomNum(0, COMMENTS.length - 1)],
    name: NAMES[GetRandomNum(0, NAMES.length - 1)],
  }));
}

function GenerateData() {
  for (let i = 0; i < 25; i++) {
    Data[i] = {
      id: randomId(),
      url: `photos/${urlId()}.jpg`,
      description: DESCRIPTION[GetRandomNum(0, DESCRIPTION.length - 1)],
      likes: GetRandomNum(15, 200),
      comments: GenerateComments(),
    };
  }
  return Data;
}

console.log(GenerateData());
