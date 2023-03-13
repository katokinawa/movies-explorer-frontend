import "./Header.css";
import NavTab from "../NavTab/NavTab";

function Header() {
  return (
    <header className="header page__header">
      <div className="header__logo"></div>
      <NavTab />
    </header>
  );
}

export default Header;
