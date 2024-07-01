import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/*генерирует рандомное число*/
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
 

// Функция для проверки, является ли число простым
function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }


  const generatQuestionAndAnswer = () => {

    const question = randomInteger(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
     
    return [question, answer];
  };
 
  const getQuestionAndAnswer = () => {

    const [question, answer] = generatQuestionAndAnswer();
    const currentAnswer = answer
    
    return [question, currentAnswer];
};

  export default () => {
    game(description, getQuestionAndAnswer);
  };
  