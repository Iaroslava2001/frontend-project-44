import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

// Функция нахождения наибольшего общего делителя двух чисел
const getGcd = (numOne, numTwo) => {
  let gcd = 1;
  for (let i = 2; i <= numOne; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      gcd = i;
    }
  } return gcd;
};

// Функция генерирует вопрос и правильный ответ на него
function playGcdGame() {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const question = `${num1} ${num2}`;

  const answer = getGcd(num1, num2);

  return [question, answer];
}

const getQuestionAndAnswer = () => {
  const [question, answer] = playGcdGame();
  const currentAnswer = answer.toString();

  return [question, currentAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
