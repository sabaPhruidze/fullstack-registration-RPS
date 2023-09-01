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
import GameHOC from "./pieces/GameHOC";

export default function Game() {
  const [click, setClick] = useState<string>("");
  const [button, setButton] = useState<boolean>(false);
  const { score, setScore, getComputerChoice, getResult } = GameHOC();
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
