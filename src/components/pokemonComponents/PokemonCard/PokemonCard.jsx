import './PokemonCard.scss';

const PokemonCard = ({ pokemonData }) => {
  console.log(pokemonData);

  const allTypes = pokemonData.types;
  const typeNames = allTypes.map(objType => objType.type.name).join(', ');

  const allStats = pokemonData.stats;
  const statNames = allStats.map(objStat => objStat.stat.name);
  const statIndexes = allStats.map(objStat => objStat.base_stat);

  console.log(statNames, ': ', statIndexes);
  console.log('Type names: ', typeNames);
  console.log(allStats);

  return (
    <>
      <div className="pokemonCard">
        <h2 className="pokemonName">{pokemonData.name}</h2>
        <div className="imageBlock">
          <img
            className="pokemonImage"
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            width={200}
          />
        </div>
        <div className="pokemonContent">
          <div className="pokemonDetails">
            <div className="pokemonStats">
              {allStats &&
                allStats.map(objStat => (
                  <p>
                    <span className="containerStat">{objStat.stat.name}</span>
                    <span className="containerStat divider"></span>
                    <span className="containerStat">{objStat.base_stat}</span>
                  </p>
                ))}
            </div>
            <p>
              <span>Types: </span>
              <span>
                <i>
                  <b>{typeNames}</b>
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
            <p>
              <span>Height: </span>
              <span>
                <i>
                  <b>{pokemonData.height} m</b>
                </i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
