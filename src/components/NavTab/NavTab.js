import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <div className="navtab__sidebar">
        <p className="subtitle navtab__subtitle">Регистрация</p>
        <div className="navtab__button">
          <p className="subtitle navtab__text-button">Войти</p>
        </div>
      </div>
    </section>
  );
}

export default NavTab;
