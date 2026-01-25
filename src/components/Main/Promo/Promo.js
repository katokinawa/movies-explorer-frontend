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
      <button className="promo__button">
        <p className="subtitle promo__text-button">Узнать больше</p>
      </button>
    </section>
  );
}

export default Promo;
