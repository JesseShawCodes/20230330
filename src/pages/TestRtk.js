import React from 'react'

import { useGetPokemonByNameQuery } from '../services/pokemon'
/*

export function Pokemon() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('radiohead')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data)
  console.log(error)
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>Response</h1>
        </>
      ) : null}
    </div>
  )
}
*/


export function Pokemon() {
  const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];
  
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function search(query) {
    console.log("SEARCH")
  }

  const { data, error, isLoading } = useGetPokemonByNameQuery('deftones')
  React.useEffect(() => {
    // const results = people
    console.log(searchTerm)
    console.log(search("RADIOHEAD"))
    // const { data, error, isLoading } = useGetPokemonByNameQuery('deftones')
    
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    
    setSearchResults(results);
    console.log(results)
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}