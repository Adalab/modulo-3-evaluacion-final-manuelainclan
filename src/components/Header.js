import logo from "../images/pngegg.png";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__img" src={logo} alt="logo de Harry Potter" />
        <h1 className="header__title">Buscador de personajes de Harry Potter</h1>
      </Link>
    </header>
  );
}

export default Header;
