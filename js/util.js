const GetRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CreateId = () => {
  let x = 0;
  return function () {
    return (x += 1);
  };
}

export { GetRandomNum , CreateId };
