import Image from "next/image";
import { rule } from "postcss";
import rulesImg from "../../src/images/image-rules.svg";

const ModalRules = ({onCloseModalClicked}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-50 flex justify-center items-center">
      <div className="card bg-white p-4 w-96 rounded-md flex flex-col items-center max-w-full mx-4">
        <header className="flex justify-between items-center w-full mb-6">
          <strong className="text-2xl text-dark-text">RULES</strong>
          <strong className="cursor-pointer" onClick={onCloseModalClicked}>X</strong>
        </header>
        <Image src={rulesImg} />
      </div>
    </div>
  );
};

export default ModalRules;
