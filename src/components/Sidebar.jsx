import waterIcon from "../imgs/water.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={waterIcon} alt="Simbolo do elemento água no pokémon" />
      <p className="title">“O que sabemos é uma gota, o que ignoramos é um oceano” (Isaac Newton).</p>
      <p>dadas</p>
      <p>dadas</p>
      <p>dadas</p>
      <a href="https://www.pokemon.com/br/" className="btn">Site Oficial Pokémon</a>
    </aside>
  );
};

export default Sidebar