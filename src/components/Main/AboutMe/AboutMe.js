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
          Разработчик, 22 года
        </p>
        <p className="subtitle aboutme__subtitle">
            Меня зовут Даниил, хочу представить свой проект на реакте!
            Больше всего мне нравится разбираться в технологиях и читать разделы связанные с программированием, меня настолько сильно это увлекло, что я решил пойти на веб-разработчика. Теперь я могу полностью раскрыть свой потенциал.<br />
            Я люблю читать книги, с особым трудом давались научные, но после я понял, что ничего сложного в этом нет, а самое главное, что мне это нравится. Изучать и быть на шаг впереди, не давая своему мозгу расслабиться, вот моё правило.
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
