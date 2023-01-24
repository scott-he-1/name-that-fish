import "./styles/game-board.css";

export const GameBoard = ({ inputGuess, setInputGuess, nextFishToName, answersLeft, setAnswersLeft, setCorrectCount, setIncorrectCount, correctCount, incorrectCount }) => {

  const handleFishGuess = (e) => {
    e.preventDefault();
    if ((inputGuess).toLowerCase() === nextFishToName.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setInputGuess('');
    setAnswersLeft(answersLeft.filter((item, index) => index === 0 ? null : item));
  }


  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName ? nextFishToName.url : null} alt={nextFishToName ? nextFishToName.name : null} />
      </div>
      <form id="fish-guess-form" onSubmit={handleFishGuess}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={inputGuess} onChange={(e) => setInputGuess(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  );
};
