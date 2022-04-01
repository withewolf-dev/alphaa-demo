import "../styles/main.scss";
import Card from "./Card";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const Main = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="rightPanel">
      <NavBar />
      <div className="cardBlock">
        {data.map((e, i) => (
          <Card />
        ))}
      </div>
      <Catalog />
      <Dashboard />
    </div>
  );
};

export default Main;
