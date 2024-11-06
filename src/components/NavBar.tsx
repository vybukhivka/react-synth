import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <NavLink to={'/'}>React Synth</NavLink>
      </div>
      <div className="flex justify-between space-x-3">
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/explore'}>Explore</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </div>
      <div>
        <NavLink to={'https://github.com/vybukhivka/react-synth'}>git </NavLink>
        <NavLink to={'https://github.com/vybukhivka/react-synth'}>inst</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
