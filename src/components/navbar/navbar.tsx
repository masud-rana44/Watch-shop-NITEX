import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Logo
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Section
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Section
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Section
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
