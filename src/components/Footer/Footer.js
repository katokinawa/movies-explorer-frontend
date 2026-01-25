import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="title footer__main-title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__undertitle-line"></div>
      <nav>
        <ul className="footer__links">
          <li className="subtitle footer__subtitle">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="subtitle footer__subtitle">
            <a
              className="footer__link"
              href="https://github.com/katokinawa"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="subtitle footer__subtitle footer__copyright">
          © {new Date().getFullYear()}. Даниил Белогур
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
