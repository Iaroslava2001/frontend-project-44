import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomInteger(5, 10);
  const start = getRandomInteger(1, 20);
  const step = getRandomInteger(1, 5);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomInteger(0, length - 1);
  const correctAnswer = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
