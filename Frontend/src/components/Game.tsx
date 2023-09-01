import { useState } from "react";
import { Img } from "./pieces/Img";
import paper from "../assets/img/paper.svg";
import scissors from "../assets/img/scissors.svg";
import rock from "../assets/img/rock.svg";
import press from "../assets/img/button.svg";
import { Row } from "./pieces/Row";
import men from "../assets/img/man.svg";
import robot from "../assets/img/robot.svg";
import "./pieces/styled.css";

export default function Game() {
  // console.log(getComputerChoice());
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
    console.log(score, playerChoice, computerChoice);

    return score;
  }

  return (
    <div>
      <div className="wrapper">
        <div className="buttons">
          <button
            className="rpsButton"
            value="Rock"
            onClick={() => setClick("Rock")}
          >
            ✊
          </button>
          <button
            className="rpsButton"
            value="Paper"
            onClick={() => setClick("Paper")}
          >
            🤚
          </button>
          <button
            className="rpsButton"
            value="Scissors"
            onClick={() => setClick("Scissors")}
          >
            ✌️
          </button>
        </div>
        <div className="resultContainer">
          {button ? (
            <div>
              <p>Your score : {score}</p>
              <Row>
                <div>
                  <Img src={men} />
                  {click}
                </div>
                <div style={{ width: 30 }} />
                <div>
                  <Img src={robot} />
                  {getComputerChoice()}
                </div>
              </Row>
            </div>
          ) : (
            ""
          )}
          <button
            id="endGameButton"
            onClick={() => {
              getResult(click, getComputerChoice());
              setButton(true);
            }}
          >
            🔴
          </button>
        </div>
      </div>
    </div>
  );
}
