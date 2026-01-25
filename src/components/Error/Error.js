import "./Error.css";

function Error() {
    
  return (
    <section className="error">
      <h1 className="title error__title">404</h1>
      <p className="subtitle error__subtitle">Страница не найдена</p>
      <p className="subtitle error__text_green">
        Назад
      </p>
    </section>
  );
}

export default Error;
