import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="uznat">
      <h2 className="title about-project__main-title">О проекте</h2>
      <div className="undertitle-line"></div>
      <div className="about-project__text-wrapper">
        <h3 className="title about-project__title-one">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="subtitle about-project__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="title about-project__title-two">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="subtitle about-project__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__graphic-wrapper">
        <div className="about-project__graphic-backend">
          <p className="subtitle about-project__graphic-text-inner">1 неделя</p>
        </div>
        <p className="subtitle about-project__graphic-text">Back-end</p>
        <div className="about-project__graphic-frontend">
          <p className="subtitle about-project__graphic-text-inner">4 недели</p>
        </div>
        <p className="subtitle about-project__graphic-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
