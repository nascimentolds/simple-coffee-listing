import "./App.css";
import axios from "axios";
import CoffeeItem from "./components/CoffeeItem";
import { useState, useEffect } from "react";

function App() {
  const [coffee, setCoffee] = useState([]);
  const [products, setProducts] = useState([]);
  const [all, setAll] = useState(true);
  const [notAll, setNotAll] = useState(false);

  const dataUrl =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((response) => {
        setCoffee(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // console.log(coffee.filter((item) => item.available === false));
  const available = coffee.filter((item) => item.available === true);

  function handleAll() {
    setProducts(coffee);
    setAll(!all)
    setNotAll(!notAll);
  }

  function handleAvailable() {
    setProducts(available);
    setAll(!all)
    setNotAll(!notAll);
  }

  return (
    <div className="container">
      <main className="main">
        <div className="main--header">
          <h1 className="main--title">Our Collection</h1>
          <p className="main--text">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="filter">
            <button className={`filter--button ${all && "filter--button-active"}`} onClick={handleAll}>
              All Products
            </button>
            <button className={`filter--button ${notAll && "filter--button-active"}`} onClick={handleAvailable}>
              Available Now
            </button>
          </div>
        </div>

        <div className="grid">
          {products.map((item) => (
            <CoffeeItem key={item.id} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
