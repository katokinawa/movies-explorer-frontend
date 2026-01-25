import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <h2 className="title footer__main-title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__undertitle-line"></div>
      <nav>
        <ul className="footer__links">
          <li className="subtitle footer__subtitle">Яндекс.Практикум</li>
          <li className="subtitle footer__subtitle">Github</li>
        </ul>
        <p className="subtitle footer__subtitle footer__copyright">
          © 2022. Даниил Белогур
        </p>
      </nav>
    </section>
  );
}

export default Footer;
