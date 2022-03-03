import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";

const CurrentWeightForm = () => {
  return (
    <form className="view__form fadeIn" onSubmit={e => e.preventDefault()}>
      <div className="form__inputWrap">
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="weight"
          className="form__input"
        />
        <label htmlFor="weight" className="form__label text-bold">
          <FontAwesomeIcon icon={faWeightHanging} />
          What is your weight today (kg)
        </label>
      </div>
      <button type={'button'} className="form__button button button-accent">
        APPLY
      </button>
    </form>
  );
};

export default CurrentWeightForm;
