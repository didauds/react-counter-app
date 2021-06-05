import styled from 'styled-components';

import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar contents-color">
        <span className="material-icons navbar-brand vertical-align-middle">reorder</span>
        <span className="navbar-brand vertical-align-middle">COUNTERAPP</span>
      </nav>
    </header>

  );
}

export default Header;