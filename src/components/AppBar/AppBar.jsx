import { NavLink } from 'react-router-dom';
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/contacts">
          Contacts
        </NavLink>
        <NavLink className="link" to="/pokemons">
          Pokemons
        </NavLink>
      </div>
    </header>
  );
};

export default AppBar;
