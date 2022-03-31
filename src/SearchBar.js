import React, { useState } from "react";
import axios from "axios";
import WordDisplay from "./WordDisplay";

export default function SearchBar() {
  let [wordInput, setWordInput] = useState(null);
  let [wordObject, setWordObject] = useState(null);

  function getWordObject(response) {
    setWordObject(response.data);
    console.log(response.data);
  }

  function handleInput(event) {
    setWordInput(event.target.value);
  }

  function startSearch(event) {
    event.preventDefault();
    let dictKey = "c0e035a8-9fee-407d-bfbe-93d2fa2a417f";
    let dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordInput}?key=${dictKey}`;
    axios.get(dictUrl).then(getWordObject);
  }

  return (
    <div className="searchBar">
      <main>
        <form onSubmit={startSearch}>
          <label>Search: </label>
          <input type="Search" onChange={handleInput} />
        </form>
      </main>
      <div className="word-section">
        <WordDisplay wordinfo={wordObject} />
      </div>
    </div>
  );
}
