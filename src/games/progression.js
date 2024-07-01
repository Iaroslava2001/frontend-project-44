import game from '../index.js';

const description = 'What is the result of the expression?';

/*генерирует рандомное число*/
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
 

// Функция для генерации арифметической прогрессии
function generateProgression() {
    const length = randomInteger(5, 10); // случайная длина прогрессии от 5 до 10
    const start = randomInteger(1, 20); // случайное начальное число от 1 до 20
    const step = randomInteger(1, 5); // случайный шаг прогрессии от 1 до 5
  
    const progression = [];
    for (let i = 0; i < length; i++) {
      progression.push(start + i * step);
    }

    // Выбираем случайную позицию для скрытия числа
    const hiddenIndex = randomInteger(0, length - 1);
    const answer = progression[hiddenIndex];
  
    // Заменяем скрытое число двумя точками в прогрессии для вопроса
    progression[hiddenIndex] = '..';
  
    // Вопрос для пользователя
    const question = progression.join(' ');
  
    return [question, answer];
  }

 
const getQuestionAndAnswer = () => {

      const [question, answer] = generateProgression();
      const currentAnswer = answer.toString(); // Приведение к строке
      
      return [question, currentAnswer];
  };

  export default () => {
    game(description, getQuestionAndAnswer);
  };
