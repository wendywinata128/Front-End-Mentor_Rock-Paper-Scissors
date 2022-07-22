const Score = ({ className, score }) => {
  return (
    <div
      className={`w-full sm:w-2/5 border-4 border-primary-white rounded-xl p-8 text-white font-bold text-lg sm:text-5xl flex justify-between ${className}`}
    >
      <div className="hero heigt sm:leading-10">
        ROCK
        <br />
        PAPER
        <br />
        SCISSOR
      </div>
      <div className="score bg-white w-44 rounded-lg flex flex-col justify-center items-center text-black gap-2">
        <span className="text-sm text-score-text tracking-widest">SCORE</span>
        <p className="text-6xl text-dark-text">{score}</p>
      </div>
    </div>
  );
};

export default Score;
