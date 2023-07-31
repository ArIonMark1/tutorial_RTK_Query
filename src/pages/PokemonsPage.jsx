import { useState } from 'react';
import { useGetZalypaQuery } from 'redux/features/apiSlice/apiSlice';
import RequestPokemonForm from 'components/pokemonComponents/RequestPokemonForm';
import PokemonCard from 'components/pokemonComponents/PokemonCard';

const PokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  // ****************************************************************
  const { data, currentData, isError, error, isFetching, isSuccess } =
    useGetZalypaQuery(pokemonName, {
      skip: pokemonName === '',
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  // ****************************************************************

  return (
    <>
      <h1>Pokemon information Layout</h1>
      <hr />
      <RequestPokemonForm submit={setPokemonName} />
      <div>
        <div>
          <hr />
          {isFetching && (
            <>
              <h3>Loading....</h3>
              <hr />
            </>
          )}
          {isError && (
            <>
              <h3>{error.data}</h3>
              <hr />
            </>
          )}
          {currentData && (
            <>
              <h3>Success!</h3>
              <hr />
            </>
          )}
        </div>

        {isSuccess && <PokemonCard pokemonData={data} />}
      </div>
    </>
  );
};

export default PokemonPage;
