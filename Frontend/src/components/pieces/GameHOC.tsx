import { useState } from "react";

export default function GameHOC() {
  const [score, setScore] = useState<number>(0);

  function getComputerChoice() {
    const rpsChoice = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // 0,1,2
    return rpsChoice[randomNumber];
  }
  function getResult(playerChoice: string, computerChoice: string) {
    if (playerChoice == computerChoice) {
      setScore(score);
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      setScore(score + 1);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
      setScore(score + 1);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    return score;
  }
  return {
    score,
    setScore,
    getComputerChoice,
    getResult,
  };
}
