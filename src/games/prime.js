import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const generatQuestionAndAnswer = () => {
  const question = getRandomInteger(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  getGameLaunch(description, generatQuestionAndAnswer);
};
