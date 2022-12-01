import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { useState } from "react";
import { Images } from "./assets/images";
import "./Components/styles/final-score.css";
import { FinalScore } from "./Components/FinalScore";

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

function App() {
  const [fishes, setFishes] = useState(initialFishes);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const incrementCorrect = () => {
    setCorrectCount(correctCount + 1);
  };

  const incrementIncorrect = () => {
    setIncorrectCount(incorrectCount + 1);
  };

  const gameOver = fishes.length === 0;
  const answersLeft = initialFishes
    .filter((initialFish) =>
      fishes.find((fish) => fish.name === initialFish.name)
    )
    .map((fish) => fish.name);

  return (
    <div className="App">
      <header>
        <ScoreBoard />
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
