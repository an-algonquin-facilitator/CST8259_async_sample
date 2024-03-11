// This file demonstrates an example of how an asynchronous request works.
// The important features of an async requests is that it happens
// based on some event. That even could be the page loading, a button click, etc
//
// Async requests do not require the page to reload. They are done in the background
// but can, and often do, change the content of the page.

const asyncURL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * Load the pokemon asynchronously. Called when the 'search' button is clicked.
 */
const loadAsync = () => {
  const pokemonName = document.getElementById("search").value;
  // Launch the request using the built-in fetch function.
  fetch(asyncURL + pokemonName).then(handleResponse);
};

/**
 * @typedef {Object} Pokemon
 * @property {string} name Name of the pokemon
 * @property {number} id Pokedex index of the pokemon
 */

/**
 * Handle the response of the fetch request.
 * @param {Response} response
 */
const handleResponse = async (response) => {
  /**
   * @type {Pokemon} pikachu
   */
  const pikachu = await response.json();
  renderPokemon(pikachu);
};

/**
 * Update the content of the page based on a pokemon fetched asynchronously.
 * @param {Pokemon} pokemon
 */
const renderPokemon = (pokemon) => {
  const nameElem = document.getElementById("pokemon-name");
  nameElem.innerText = `Pokemon Name: ${pokemon.name}`;

  const idElem = document.getElementById("pokemon-id");
  idElem.innerText = `Pokedex Index: ${pokemon.id}`;

  const imgElem = document.getElementById("pokemon-img");
  imgElem.src = pokemon.sprites.front_default;
};
