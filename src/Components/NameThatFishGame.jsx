import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { ScoreBoard } from "./ScoreBoard";
import { Images } from "../assets/images";
import { FinalScore } from "./FinalScore";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const NameThatFishGame = () => {
  const [inputGuess, setInputGuess] = useState('');
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes.map((fish) => fish))
  const nextFishToName = answersLeft.length ? answersLeft[0] : null;

  return (
    <div>
      <ScoreBoard 
      answersLeft={answersLeft.map((fish) => fish.name)}
      incorrectCount={incorrectCount}
      correctCount={correctCount}
      />
      {answersLeft.length ? (
        <GameBoard 
        nextFishToName={nextFishToName}
        inputGuess={inputGuess}
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        answersLeft={answersLeft}
        setInputGuess={setInputGuess}
        setIncorrectCount={setIncorrectCount}
        setCorrectCount={setCorrectCount}
        setAnswersLeft={setAnswersLeft}
        />
      ) : (
        <FinalScore 
        totalCount={incorrectCount + correctCount}
        correctCount={correctCount}
        />
      )}
    </div>
  )
}