//Функция генерирует рандомное число
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default randomInteger;