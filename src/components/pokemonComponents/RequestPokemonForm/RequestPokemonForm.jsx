import './RequestPokemonForm.scss';

const RequestPokemonForm = ({ submit }) => {
  // --------------------------------------------------------
  const handleSubmitName = evt => {
    evt.preventDefault();
    submit(evt.currentTarget.elements.pokemonName.value);
  };
  // --------------------------------------------------------

  return (
    <>
      <div>
        <h2>Pokemon Page</h2>
      </div>
      <form onSubmit={handleSubmitName}>
        <input
          type="text"
          name="pokemonName"
          placeholder="input pokemon name"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default RequestPokemonForm;
