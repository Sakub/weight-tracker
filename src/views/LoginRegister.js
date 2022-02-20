import PropTypes from "prop-types";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import workoutImage from "../assets/workout.svg";
import "./css/LoginRegister.css";

const LoginRegister = ({ type }) => {
  return (
    <div className="view">
      <div className="view__svgWrapper">
        <img src={workoutImage} alt="Working out man" />
      </div>
      <div className="view__block slideUp">
        <h2 className="view__title">
          {type === "register" ? "Get started" : "Welcome back!"}
        </h2>
        {type === "register" ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};

LoginRegister.propTypes = {
  type: PropTypes.oneOf(["register", "login"]).isRequired,
};

export default LoginRegister;
