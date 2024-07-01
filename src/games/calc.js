import game from '../index.js';

const description = 'What is the result of the expression?';

/*генерирует рандомное число*/
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
 

/*Возвращает случайный оператор из массива ['+', '-', '*']. */
function getRandomOperator() {
    const operators = ['+', '-', '*'];
    const randomIndex = randomInteger(0, operators.length - 1);
    return operators[randomIndex];
  }


/*Генерирует два случайных числа.Выбирает случайный оператор.Создает строку выражения.Вычисляет результат выражения.
Возвращает объект с выражением и его результатом. */
function generateRandomExpression() {
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
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
    }
  
    return [question, answer];
  }

 
const getQuestionAndAnswer = () => {

      const [question, answer] = generateRandomExpression();
      const currentAnswer = answer.toString(); // Приведение к строке
      return [question, currentAnswer];
  };

  export default () => {
    game(description, getQuestionAndAnswer);
  };

  