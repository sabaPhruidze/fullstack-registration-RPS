import { useState } from "react";
import { Img } from "./pieces/Img";
import men from "../assets/img/man.svg";
import robot from "../assets/img/robot.svg";

import { Dark } from "./pieces/Dark";
import { GameContainer } from "./pieces/GameContainer";
import { OkeyButton } from "./pieces/OkeyButton";
import { GameButton } from "./pieces/GameButton";
import { Buttons } from "./pieces/Buttons";
import { Row } from "./pieces/Row";
import { Wrapper } from "./pieces/Wrapper";
import { ResultContainer } from "./pieces/ResultContainer";
import { Congrats } from "./pieces/Congrats";

export default function Game() {
  const [click, setClick] = useState<string>("");
  const [button, setButton] = useState<boolean>(false);
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

  return (
    <GameContainer>
      {score === 5 && (
        <>
          <Dark />
          <Congrats>
            Congratulations, You have won
            <OkeyButton
              onClick={() => {
                setScore(0);
              }}
            >
              Refresh
            </OkeyButton>
          </Congrats>
        </>
      )}
      <Wrapper>
        <Buttons>
          <GameButton onClick={() => setClick("Rock")}>✊</GameButton>
          <GameButton onClick={() => setClick("Paper")}>🤚</GameButton>
          <GameButton onClick={() => setClick("Scissors")}>✌️</GameButton>
        </Buttons>
        <ResultContainer>
          {button ? (
            <>
              <p>Your score : {score}</p>
              <Row>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Img src={men} />
                  {click}
                </div>
                <div style={{ width: 30 }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Img src={robot} />
                  {getComputerChoice()}
                </div>
              </Row>
            </>
          ) : (
            ""
          )}
          <GameButton
            onClick={() => {
              getResult(click, getComputerChoice());
              setButton(true);
            }}
          >
            🔴
          </GameButton>
        </ResultContainer>
      </Wrapper>
    </GameContainer>
  );
}
