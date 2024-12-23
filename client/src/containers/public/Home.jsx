import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
      <Header></Header>
      <Navigation></Navigation>
      <div className="flex flex-col items-center justify-start w-1100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
