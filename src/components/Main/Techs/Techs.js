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
      <div className="techs__graphic-wrapper">
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">HTML</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">CSS</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">JS</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">React</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">Git</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">Express.js</p>
        </div>
        <div className="techs__graphic">
          <p className="subtitle techs__graphic-text-inner">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
