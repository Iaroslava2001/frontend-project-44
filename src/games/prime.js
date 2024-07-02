import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция для проверки, является ли число простым
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const generatQuestionAndAnswer = () => {
  const question = getRandomInteger(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const getQuestionAndAnswer = () => {
  const [question, answer] = generatQuestionAndAnswer();
  const currentAnswer = answer;

  return [question, currentAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
