import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What is the result of the expression?';

// Функция возвращает случайный оператор из массива ['+', '-', '*'].
function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInteger(0, operators.length - 1);
  return operators[randomIndex];
}

// Функция возвращает объект с выражением и его результатом. */
function generateRandomExpression() {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return [question, answer];
}

const getQuestionAndAnswer = () => {
  const [question, answer] = generateRandomExpression();
  const currentAnswer = answer.toString(); // Приведение к строке
  return [question, currentAnswer];
};

export default () => {
  getGameLaunch(description, getQuestionAndAnswer);
};
