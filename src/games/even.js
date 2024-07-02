import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(1, 9);
  const currecAnswer = isEven(question) ? 'yes' : 'no';

  return [question, currecAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
