import {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

useEffect(() => {

  const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

  axios.get(URL).then((response) => {
    console.log(response.data);
  })

}, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
    </div>
  );
}

export default App;
