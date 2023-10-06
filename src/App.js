import data from "./bingoCards.json";
import Card from "./components/Card";
import { SendFinalScore } from "./components/SendFinalScore";

const App = () => {
  const cards = data.cards;
  const drawnNumbers = [];
  let undrawnNumbersInCard = [];
  let lastCard;
  let done;

  const drawOrder = [
    1, 76, 38, 96, 62, 41, 27, 33, 4, 2, 94, 15, 89, 25, 66, 14, 30, 0, 71, 21,
    48, 44, 87, 73, 60, 50, 77, 45, 29, 18, 5, 99, 65, 16, 93, 95, 37, 3, 52,
    32, 46, 80, 98, 63, 92, 24, 35, 55, 12, 81, 51, 17, 70, 78, 61, 91, 54, 8,
    72, 40, 74, 68, 75, 67, 39, 64, 10, 53, 9, 31, 6, 7, 47, 42, 90, 20, 19, 36,
    22, 43, 58, 28, 79, 86, 57, 49, 83, 84, 97, 11, 85, 26, 69, 23, 59, 82, 88,
    34, 56, 13,
  ];

  const checkBingo = (card) => {
    if (card.forEach((row) => row.every((num) => drawnNumbers.includes(num)))) {
      return true;
    }

    for (let i = 0; i < 5; i++) {
      if (card.every((row) => drawnNumbers.includes(row[i]))) {
        return true;
      }
    }
    return false;
  };

  const getUndrawnNumbersInLastCard = () => {
    lastCard.forEach((row) =>
      row.forEach((num) => {
        if (!drawnNumbers.includes(num)) {
          undrawnNumbersInCard.push(num);
        }
      })
    );
    return;
  };

  drawOrder.every((num) => {
    drawnNumbers.push(num);
    let bingoCount = 0;
    cards.forEach((card) => {
      if (checkBingo(card)) {
        bingoCount++;
      } else {
        lastCard = card;
      }
      if (bingoCount === cards.length) {
        done = true;
        getUndrawnNumbersInLastCard();
      }
    });
    return bingoCount !== cards.length;
  });

  const getSumOfUndrawnNumbers = () => {
    let sum = 0;
    undrawnNumbersInCard.forEach((number) => {
      sum += number;
    });
    return sum;
  };

  const getFinalScore = () => {
    const lastBingoNum = drawnNumbers[drawnNumbers.length - 1];
    return getSumOfUndrawnNumbers() * lastBingoNum;
  };

  return (
    done && (
      <>
        <main>
          <Card card={lastCard} drawnNumbers={drawnNumbers} />
          <SendFinalScore finalScore={getFinalScore()} />
        </main>
      </>
    )
  );
};
export default App;
