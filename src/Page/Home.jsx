import { DisplayData } from "../Components/DisplayData";
import { Filter } from "../Components/Filter";
import { Header } from "../Components/Header";

export const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <DisplayData />
      </div>
    </div>
  );
};
