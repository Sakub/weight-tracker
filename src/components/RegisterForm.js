import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const [value, setValue] = useState(0);

  const forceUpdate = () => setValue(value + 1);
  return (
    <form className="view__form">
      <div className="form__inputWrap">
        <input
          placeholder="email"
          type="email"
          name="email"
          id="email"
          className="form__input"
        />
        <label htmlFor="email" className="form__label">
          <FontAwesomeIcon icon={faEnvelope} />
          E-mail
        </label>
      </div>
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
        REGISTER
      </button>
      <p className={"form__redirect"}>
        Already have an account?{" "}
        <Link onClick={forceUpdate} to="/login">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
