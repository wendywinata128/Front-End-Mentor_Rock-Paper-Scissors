import Image from "next/image";
import paperImage from "../../src/images/icon-paper.svg";
import rockImage from "../../src/images/icon-rock.svg";
import scissorImage from "../../src/images/icon-scissors.svg";

const Option = ({ name = "paper", onClickedOption }) => {
  const bgColor = () => {
    let color;

    if (name == "paper") {
      color = "hsl(230, 89%, 62%), hsl(230, 89%, 65%)";
    } else if (name == "rock") {
      color = "hsl(349, 71%, 52%), hsl(349, 70%, 56%)";
    } else {
      color = "hsl(39, 89%, 49%), hsl(40, 84%, 53%)";
    }

    return `radial-gradient(${color})`;
  };

  const img = () => {
    let image;
    if (name == "paper") {
      image = paperImage;
    } else if (name == "rock") {
      image = rockImage;
    } else {
      image = scissorImage;
    }

    return image;
  };

  return (
    <div
      className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center cursor-pointer z-50 active:scale-90 transition-all duration-300"
      style={{
        background: bgColor(),
      }}
      onClick={() => onClickedOption(name)}
    >
      <div className="bg-white w-36 h-36 rounded-full flex items-center justify-center">
        <Image src={img()} alt={name} width="80%" height={"80%"} />
      </div>
    </div>
  );
};

export default Option;
