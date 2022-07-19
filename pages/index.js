import Head from "next/head";
import { useState } from "react";
import ContainerPlay from "../components/container-play";
import Score from "../components/Score";

export default function Home() {
  const [score, setScore] = useState(0);
  
  const onGameEndHandler = (result) => {
    setScore(score + result);
  }

  return (
    <div>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta
          name="description"
          content="Rock Paper Scissors, Challenge by Front End Mentor"
        />
      </Head>

      <main className="flex-col">
        <button className="border px-12 py-2 border-white text-white rounded-md absolute right-8 bottom-8 spacing tracking-widest outline-none">
          Rules
        </button>

        <Score className="mb-12" score={score}  />

        <ContainerPlay onGameEnd={onGameEndHandler}/>
      </main>
    </div>
  );
}
