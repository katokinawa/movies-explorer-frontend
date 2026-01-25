import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo-image"></div>
      <h1 className="title promo__title">
      Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="subtitle promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <div className="promo__button">
        <p className="subtitle promo__subtitle_button">Узнать больше</p>
      </div>
    </section>
  );
}

export default Promo;
