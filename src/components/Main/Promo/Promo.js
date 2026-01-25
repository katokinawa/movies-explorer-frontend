import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo-image"></div>
      <h1 className="title promo__title">
        Учебный проект студента факультета{" "}
        <span className="promo__span">Веб-разработки.</span>
      </h1>
      <p className="subtitle promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a href="#uznat" className="promo__button subtitle promo__text-button button-animation">
        Узнать больше
      </a>
    </section>
  );
}

export default Promo;
