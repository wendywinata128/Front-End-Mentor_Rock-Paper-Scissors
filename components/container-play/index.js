import { Fragment, useEffect, useState } from "react";
import ContainerResult from "../container-result";
import Option from "../option";

const ContainerPlay = ({ onGameEnd }) => {
  const [myOption, setMyOption] = useState("");
  const [enemyOption, setEnemyOption] = useState("");
  const [isWinner, setisWinner] = useState(false);

  const onOptionClickHandler = (option) => {
    let enemy = createEnemyOption();
    let isWin = false;

    setMyOption(option);
    setEnemyOption(enemy);

    if (option == "rock" && enemy == "scissors") isWin = true;
    else if (option == "paper" && enemy == "rock") isWin = true;
    else if (option == "scissors" && enemy == "paper") isWin = true;

    setisWinner(isWin);

    onGameEnd(option == enemy ? 0 : isWin ? 1 : -1);
  };

  const createEnemyOption = () => {
    let option = ["rock", "paper", "scissors"];

    let enemy = option[Math.floor(Math.random() * 3)];

    return enemy;
  };

  const onResetGameClickHandler = () => {
    setMyOption("");
  };

  return (
    <Fragment>
      {myOption == "" ? (
        <div className="grid grid-cols-2 gap-x-24 relative">
          <Option name="paper" onClickedOption={onOptionClickHandler} />
          <Option name="scissors" onClickedOption={onOptionClickHandler} />
          <div className="col-span-2 grid justify-center mt-6">
            <Option name="rock" onClickedOption={onOptionClickHandler} />
          </div>
        </div>
      ) : (
        <ContainerResult
          onPlayAgainClicked={onResetGameClickHandler}
          myOption={myOption}
          enemyOption={enemyOption}
          isWinner={isWinner}
        />
      )}
    </Fragment>
  );
};

export default ContainerPlay;
