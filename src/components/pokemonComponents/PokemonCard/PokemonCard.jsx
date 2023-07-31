import './PokemonCard.scss';

const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      <div className="pokemonCard">
        <div className="imageBlock">
          <img
            className="pokemonImage"
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            width={200}
          />
        </div>
        <div className="pokemonContent">
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
      </div>
    </>
  );
};

export default PokemonCard;
