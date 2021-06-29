import React from "react";
import Card from "./card";

const Applicants = ({ applicants }) => {
  return (
    <div
      className="uk-child-width-1-1 uk-child-width-1-3@l uk-child-width-1-2@s uk-grid-match"
      data-uk-grid
    >
      {applicants &&
        applicants.map((item) => {
          return <Card applicant={item} key={`article__left__${item.slug}`} />;
        })}
    </div>
  );
};

export default Applicants;
