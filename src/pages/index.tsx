import { invoke } from "@tauri-apps/api/tauri";
import { NextPage } from "next";

import HomePage from "@/screens/Home/Home";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
