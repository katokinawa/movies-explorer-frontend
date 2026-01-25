import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="title main-title">Студент</h2>
      <div className="undertitle-line"></div>
      <div className="aboutme__text-wrapper">
        <div className="img-student"></div>
        <h3 className="title aboutme__title">Даниил</h3>
        <p className="subtitle aboutme__subtitle">
          Фронтенд-разработчик, 22 года
        </p>
        <p className="subtitle aboutme__subtitle">
          Здесь должен быть текст, который должен написать студент, но ему очень
          лень и вообще, хватит читать, переходите{" "}
          <a href="https://music.yandex.ru/album/16029794/track/84516454">
            по ссылке.
          </a>
        </p>
      </div>
      <a
        className="subtitle aboutme__subtitle-url"
        href="https://github.com/katokinawa"
      >
        Github
      </a>
    </section>
  );
}

export default AboutMe;
