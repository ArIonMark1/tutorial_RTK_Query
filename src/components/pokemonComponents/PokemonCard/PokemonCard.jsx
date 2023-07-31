const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      <h3>PokemonCard</h3>
      <div>
        <p>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            width={200}
          />
        </p>
        <p>
          <span>Name: </span>
          <span>
            <i>
              <b>{pokemonData.name}</b>
            </i>
          </span>
        </p>
        <p>
          <span>Weight: </span>
          <span>
            <i>
              <b>{pokemonData.weight / 10} kg</b>
            </i>
          </span>
        </p>
      </div>
    </>
  );
};

export default PokemonCard;
