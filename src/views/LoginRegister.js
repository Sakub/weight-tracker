const LoginRegister = ({ type }) => {
  return (
    <p className="view__title">
      {type === "register" ? "Getting started" : "Welcome back!"}
    </p>
  );
};

export default LoginRegister;
