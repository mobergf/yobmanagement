import { createAPI, updateAPI } from "../lib/api";
import { useRef } from "react";

const Form = ({ applicant, isNew, allStages, onSubmit = () => {} }) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const mailRef = useRef(null);
  const addressRef = useRef(null);
  const descRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplicant = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: mailRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value,
      stage: isNew ? allStages[0] : applicant.stage,
      slug: nameRef.current.value.replace(/\s+/g, "-").toLowerCase(),
    };
    if (isNew) {
      createAPI("/applicants", newApplicant);
    } else {
      updateAPI(
        `/applicants/${applicant.id}`,
        newApplicant,
        `/applicants/${newApplicant.slug}`
      );
    }
    onSubmit();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="uk-animation-fade">
      <legend className="uk-legend">Namn</legend>
      <input
        className="uk-input uk-form-width-large uk-margin-small-bottom"
        placeholder="Anna Andersson"
        ref={nameRef}
        defaultValue={applicant?.name}
      />
      <legend className="uk-legend">Ålder</legend>
      <input
        className="uk-input uk-form-width-small uk-margin-small-bottom"
        placeholder="99"
        ref={ageRef}
        defaultValue={applicant?.age}
      />
      <legend className="uk-legend">Email</legend>
      <input
        className="uk-input uk-form-width-large uk-margin-small-bottom"
        placeholder="anna.andersson@gmail.com"
        ref={mailRef}
        defaultValue={applicant?.email}
      />
      <legend className="uk-legend">Adress</legend>
      <input
        className="uk-input uk-form-width-large uk-margin-small-bottom"
        placeholder="Gågatan 1, 123 45, Stockholm"
        ref={addressRef}
        defaultValue={applicant?.address}
      />
      <legend className="uk-legend">Beskrivning</legend>
      <textarea
        className="uk-textarea uk-margin-small-bottom"
        ref={descRef}
        defaultValue={applicant?.description}
      ></textarea>

      <button
        type="submit"
        className="applicant-button applicant-button--submit"
      >
        Skicka
      </button>
    </form>
  );
};

export default Form;
