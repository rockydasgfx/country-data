import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setcountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(countries)

  
  const hendleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  };
  

  return (
    <div>
      <h1>countrys: {countries.length} </h1>
      <h4>Countrys added:{cart.length} </h4>
      <Cart cart={cart} />
      <div>
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca2}
            hendleAddCountry={hendleAddCountry}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
