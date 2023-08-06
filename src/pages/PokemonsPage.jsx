import { useState } from 'react';
import { useGetPokemonQuery } from 'redux/features/apiSlice/apiSlice';
import RequestPokemonForm from 'components/pokemonComponents/RequestPokemonForm';
import PokemonCard from 'components/pokemonComponents/PokemonCard';

const PokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  // ****************************************************************
  const { data, currentData, isError, error, isFetching, isSuccess } =
    useGetPokemonQuery(pokemonName, {
      skip: pokemonName === '',
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  // ****************************************************************

  return (
    <div className="container">
      <h1 className="headers">Pokemon information Layout</h1>
      <RequestPokemonForm submit={setPokemonName} />
      <div>
        <div>
          {isFetching && (
            <>
              <h3 className="headers">Loading....</h3>
            </>
          )}
          {isError && (
            <>
              <h3 className="headers">{error.data}</h3>
            </>
          )}
          {currentData && (
            <>
              <h3 className="headers">Success!</h3>
            </>
          )}
        </div>

        {isSuccess && <PokemonCard pokemonData={data} />}
      </div>
    </div>
  );
};

export default PokemonPage;
