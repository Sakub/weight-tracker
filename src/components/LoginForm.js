import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <form className="view__form">
      <div className="form__inputWrap">
        <input
          placeholder="username"
          type="text"
          name="username"
          id="username"
          className="form__input"
        />
        <label htmlFor="username" className="form__label">
          <FontAwesomeIcon icon={faUser} />
          Username
        </label>
      </div>
      <div className="form__inputWrap">
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
          className="form__input"
        />
        <label htmlFor="password" className="form__label">
          <FontAwesomeIcon icon={faLock} />
          Password
        </label>
      </div>

      <button type={"button"} className={`button button-accent form__button`}>
        LOGIN
      </button>
      <p className={"form__redirect"}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
