import React from "react";

const Country = (props) => {
    // console.log(props.country)
  const {name, flags, region, population} = props.country;

  const hendleAddCountry = props.hendleAddCountry;
  return (
    <div style={{border: '1px solid red', margin: '10px'}}>
      <h2>Conutry Name: {name.common}</h2>
      <img style={{height: '100px'}} src={flags.svg} alt=""></img>
      <p>population:{population}</p>
      <p>Region:{region}</p>
      <button onClick={ () => hendleAddCountry(props.country)}>Add country</button>
    </div>
  );
};

export default Country;
