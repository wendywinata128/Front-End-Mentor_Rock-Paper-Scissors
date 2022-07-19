import { Fragment, useState } from "react";
import ContainerResult from "../container-result";
import Option from "../option";

const ContainerPlay = ({onGameEnd}) => {
  const [myOption, setMyOption] = useState("");

  const onOptionClickHandler = (option) => {
    setMyOption(option);
    onGameEnd(-1);
  };

  const createEnemyOption = () => {
    let option = ['rock', 'paper', 'scissors'];

    let enemy = '';

    if(myOption == 'rock'){
      enemy = 'paper';
    }else if(myOption == 'paper'){
      enemy = 'scissors'
    }else{
      enemy = 'rock';
    }

    return enemy;
  }

  const onResetGameClickHandler= () => {
    setMyOption("");
  }

  return (
    <Fragment>
      {myOption == "" ? (
        <div className="grid grid-cols-2 gap-x-24 relative">
          {/* <div className="line absolute h-8 w-full left-0 bg-dark-text top-20"></div> */}
          {/* <div className="line absolute h-8 w-1/2 bg-dark-text top-20 left-1/2 -translate-x-1/2 -rotate-45 origin-right"></div> */}
          {/* <div className="line absolute h-8 w-full left-0 bg-dark-text top-20"></div> */}

          <Option name="paper" onClickedOption={onOptionClickHandler} />
          <Option name="scissors" onClickedOption={onOptionClickHandler} />
          <div className="col-span-2 grid justify-center mt-6">
            <Option name="rock" onClickedOption={onOptionClickHandler} />
          </div>
        </div>
      ) : (
        <ContainerResult onPlayAgainClicked={onResetGameClickHandler} myOption={myOption} enemyOption={createEnemyOption()}/>
      )}
    </Fragment>
  );
};

export default ContainerPlay;
