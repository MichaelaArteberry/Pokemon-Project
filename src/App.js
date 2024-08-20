import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);

    URL = `https://pokeapi.co/api/v2/pokemon/${number}`

useEffect(() => {

  axios
  .get(URL).then((response) => {
    console.log(response.data);
    setData(response.data);
    setName(response.data.name);
    setWeight(response.data.weight);
  }).catch((err) => {
    window.alert(err);
  });

}, [URL]);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <input type={"number"} onChange={(e)=>{setNumber(e.target.value)}} />
      <button>Show Me</button>
      <h2>My name is {name}</h2>
      <p>My weight is {weight}.</p>
      <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading</p>"} alt={name} />
      <p>My Abilities are: </p>
    {data?data.abilities.map((value,key) => {
      return (
        <div key={key}>
          <p>{value.ability.name}</p>
        </div>
      )
      }):"<p>Loading</p>"}
    </div>
  );
}

export default App;
