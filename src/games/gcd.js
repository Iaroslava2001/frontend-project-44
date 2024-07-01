import game from '../index.js';
import randomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
 
//Функция нахождения наибольшего общего делителя двух чисел
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Функция генерирует вопрос и правильный ответ на него
function playGcdGame() {

    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
    const question = `${num1} ${num2}`;

    const answer = gcd(num1, num2);

    return [question, answer];
}


const getQuestionAndAnswer = () => {

      const [question, answer] = playGcdGame();
      const currentAnswer = answer.toString(); // Приведение к строке
      
      return [question, currentAnswer];
  };

  export default () => {
    game(description, getQuestionAndAnswer);
  };
