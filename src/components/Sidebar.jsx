import waterIcon from "../imgs/water.png";
import { ImWikipedia } from "react-icons/im";
import { GiPokecog } from "react-icons/gi";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={waterIcon} alt="Simbolo do elemento água no pokémon" />
      <p className="title">“O que sabemos é uma gota, o que ignoramos é um oceano” (Isaac Newton).</p>
      <div className="pokes-list">
        <div className="poke-list">
          <p>Mantine: Raia Manta</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/mantine"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Jamanta"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Remoraid: Rêmora</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/remoraid"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/R%C3%AAmora"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Octillery: Polvo</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/octillery"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Polvo"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Horsea e evoluções: Cavalo-marinho</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/horsea"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Cavalo-marinho"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Gyarados e Dratini: Peixe-remo</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/gyarados"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Regaleco"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Parasect: Caranguejo-eremita</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/parasect"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Paguroidea"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Gorebyss: Rhinochimaeridae</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/gorebyss"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Rhinochimaeridae"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Staryu: Estrelas-do-mar</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/staryu"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Estrela-do-mar"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Shellos: Nudibrânquios</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/shellos"> <GiPokecog /> </a>
          <a className="icons" href="https://pt.wikipedia.org/wiki/Nudibranchia"> <ImWikipedia /> </a>
        </div>
        <div className="poke-list">
          <p>Stunfisk: Peixe stargazer</p>
          <a className="icons" href="https://www.pokemon.com/br/pokedex/stunfisk"> <GiPokecog /> </a>
          <a className="icons" href="https://en.wikipedia.org/wiki/Stargazer_(fish)"> <ImWikipedia /> </a>
        </div>


      </div>

      <a href="https://www.pokemon.com/br/" className="btn">Site Oficial Pokémon</a>
    </aside>
  );
};

export default Sidebar