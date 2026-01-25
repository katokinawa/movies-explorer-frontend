import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="title portfolio__main-title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__text-wrapper">
          <p className="subtitle portfolio__subtitle">Статичный сайт</p>
          <a
            className="strelka"
            href="https://katokinawa.github.io/Tinkoff-test/"
            rel="noreferrer"
            target="_blank"
          ></a>
        </li>
        <li className="portfolio__text-wrapper">
          <p className="subtitle portfolio__subtitle">Адаптивный сайт</p>
          <a
            className="strelka"
            href="https://katokinawa.github.io/russian-travel/"
            rel="noreferrer"
            target="_blank"
          ></a>
        </li>
        <li className="portfolio__text-wrapper">
          <p className="subtitle portfolio__subtitle">
            Одностраничное приложение
          </p>
          <a
            className="strelka"
            href="https://katokinawa.github.io/mesto/"
            rel="noreferrer"
            target="_blank"
          ></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
