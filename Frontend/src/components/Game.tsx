import paper from "../assets/img/paper.svg";
import scissors from "../assets/img/scissors.svg";
import rock from "../assets/img/rock.svg";
import press from "../assets/img/button.svg";
import "./pieces/styled.css";

export default function Game() {
  return (
    <div>
      <div className="wrapper">
        <div className="buttons">
          <button className="rpsButton" value="Rock">
            ✊
          </button>
          <button className="rpsButton" value="Paper">
            🤚
          </button>
          <button className="rpsButton" value="Scissors">
            ✌️
          </button>
        </div>
        <div className="resultContainer">
          <div id="player-score"></div>
          <div id="hands"></div>
          <div id="result"></div>
          <button id="endGameButton">🔴</button>
        </div>
      </div>
    </div>
  );
}
