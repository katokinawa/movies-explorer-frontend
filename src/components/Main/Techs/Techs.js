import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="title techs__main-title">Технологии</h2>
      <div className="undertitle-line"></div>
      <h3 className="title techs__title">7 технологий</h3>
      <p className="subtitle techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__graphic-wrapper">
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">HTML</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">CSS</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">JS</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">React</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">Git</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">Express.js</p>
        </li>
        <li className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
