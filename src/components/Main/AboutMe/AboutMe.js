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
          Меня зовут Даниил, люблю на солнышке полежать. Вы сейчас видите мой
          проект написанный на реакте, скоро подключу API и будет вообще
          FanTasTic!. Но сейчас, наверное, лучшее решение будет пойти покушать,
          а после отдыхать. Утром на работу вставать, короче, кучу взрослых дел.
          Brr...
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
