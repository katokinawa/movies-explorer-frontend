import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="title portfolio__main-title">Портфолио</h2>
      <div className="portfolio__text-wrapper">
        <p className="subtitle portfolio__subtitle">Статичный сайт</p>
        <a
          className="strelka"
          href="https://katokinawa.github.io/Tinkoff-test/"
          rel="noreferrer"
          target="_blank"
        ></a>
      </div>
      <div className="portfolio__undertitle-line"></div>
      <div className="portfolio__text-wrapper">
        <p className="subtitle portfolio__subtitle">Адаптивный сайт</p>
        <a
          className="strelka"
          href="https://katokinawa.github.io/russian-travel/"
          rel="noreferrer"
          target="_blank"
        ></a>
      </div>
      <div className="portfolio__undertitle-line"></div>
      <div className="portfolio__text-wrapper">
        <p className="subtitle portfolio__subtitle">
          Одностраничное приложение
        </p>
        <a
          className="strelka"
          href="https://katokinawa.github.io/mesto/"
          rel="noreferrer"
          target="_blank"
        ></a>
      </div>
      <div className="portfolio__undertitle-line"></div>
    </section>
  );
}

export default Portfolio;
