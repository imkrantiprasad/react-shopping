import "./App.css";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  return (
    <div className="main">
      <div className="company-name">My Shopping Website</div>
      <div className="shopping-items">
        {data.map((item) => (
          <Card shoppingItem={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
