import { useEffect, useState } from "react";
import Option from "../option";

const ContainerResult = ({ myOption, enemyOption, onPlayAgainClicked, isWinner }) => {

  return (
    <div className="flex justify-between text-white text-lg text-center font-bold gap-16">
      <div className="flex flex-col gap-8">
        <label>YOU PICKED</label>
        <Option name={myOption} />
      </div>
      <div className="flex items-end">
        <div className="h-48 flex w-64 items-center justify-center flex-col gap-4">
          <div className="result text-4xl">{myOption == enemyOption ? 'DRAW' : isWinner ? 'YOU WIN' : 'YOU LOSE'}</div>
          <button
            className={`bg-white ${isWinner ? 'text-dark-text' : 'text-danger'} text-sm tracking-widest py-2 px-8 rounded-md`}
            onClick={onPlayAgainClicked}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label>ENEMY PICKED</label>
        <Option name={enemyOption} />
      </div>
    </div>
  );
};

export default ContainerResult;
