import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon.ts";

const pokemonContainer = document.querySelector(
  ".card-container"
) as HTMLElement;

const renderCard = (pokemonArray: Pokemon[]) => {
  let cardsHTML = "";

  pokemonArray.forEach((pokemon: Pokemon) => {
    cardsHTML += `
    <div class="card">
      <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}" />
      <div class="card__content">
      <h2 class="card__heading">${pokemon.name}</h2>
      <p class="card__text">ID:${pokemon.id}</p>
      <p class="card__text">Types: ${pokemon.types}</p>
      </div>
    </div>
  `;
  });

  return cardsHTML;
};

pokemonContainer.innerHTML = renderCard(pokemonArray);
