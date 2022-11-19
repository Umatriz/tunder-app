import { FC } from "react";
import Timer from "./Timer/Timer"
import Buttons from "./Buttons/Buttons"

type Props = {};

const HomePage: FC = ({}: Props) => {
  return (
    <div>
      <Timer />
    </div>
  );
};

export default HomePage;
