import getGameLaunch from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInteger(0, operators.length - 1);
  return operators[randomIndex];
};

const generateRandomExpression = () => {
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

  const correctAnswer = answer.toString();

  return [question, correctAnswer];
};

export default () => {
  getGameLaunch(description, generateRandomExpression);
};
