import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (numOne, numTwo) => {
  let gcd = 1;
  for (let i = 2; i <= numOne; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      gcd = i;
    }
  } return gcd;
};

const playGcdGame = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const question = `${num1} ${num2}`;

  const correctAnswer = getGcd(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  getGameLaunch(description, playGcdGame);
};
