import { useEffect, useState } from 'react';
import { getData } from './services/character';
import './App.css';

function App() {

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData(query).then(data => {
          setCharacters(data.data.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [query]);

  return (
    <div className="App">
      <div className='search'>
        <input key={Math.random} type='text' placeholder='Search character' className='input' onChange={event => setQuery(event.target.value)} value={query} />
      </div>
      <div className='results'>
        <div className='result-item'>
          {characters.map(character => (
            <div className='item'>
              <img key={character.name} src={character.image} alt={character.name} />
              <label>{character.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
