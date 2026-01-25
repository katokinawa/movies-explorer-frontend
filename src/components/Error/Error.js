import "./Error.css";
import { useNavigate } from "react-router-dom";
function Error() {
  const history = useNavigate();
  return (
    <section className="error">
      <h1 className="title error__title">404</h1>
      <p className="subtitle error__subtitle">Страница не найдена</p>
      <button
        onClick={() => history(-1)}
        className="subtitle error-text-green"
      >
        Назад
      </button>
    </section>
  );
}

export default Error;
