import './RequestPokemonForm.scss';

const RequestPokemonForm = ({ submit }) => {
  // --------------------------------------------------------
  const handleSubmitName = evt => {
    evt.preventDefault();
    submit(evt.currentTarget.elements.pokemonName.value);
    evt.currentTarget.reset();
  };
  // --------------------------------------------------------

  return (
    <>
      <form onSubmit={handleSubmitName} className="form">
        <label className="label" htmlFor="pokemonName">
          <input
            id="pokemonName"
            type="text"
            name="pokemonName"
            placeholder="input pokemon name or id"
          />
        </label>

        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  );
};

export default RequestPokemonForm;
