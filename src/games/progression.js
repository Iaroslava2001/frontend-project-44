import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

// Функция генерирует арифметическую прогрессию
function generateProgression() {
  const length = getRandomInteger(5, 10); // случайная длина прогрессии от 5 до 10
  const start = getRandomInteger(1, 20); // случайное начальное число от 1 до 20
  const step = getRandomInteger(1, 5); // случайный шаг прогрессии от 1 до 5

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  // Выбирает случайную позицию для скрытия числа
  const hiddenIndex = getRandomInteger(0, length - 1);
  const answer = progression[hiddenIndex];

  // Заменяет скрытое число двумя точками в прогрессии для вопроса
  progression[hiddenIndex] = '..';

  // Вопрос для пользователя
  const question = progression.join(' ');

  return [question, answer];
}

const getQuestionAndAnswer = () => {
  const [question, answer] = generateProgression();
  const currentAnswer = answer.toString();

  return [question, currentAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
