import React from "react";
import Link from "next/link";
import Image from "../components/image";

const Card = ({ applicant }) => {
  return (
    <Link as={`/applicants/${applicant.slug}`} href="/applicants/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted  article-card uk-animation-fade">
          <div className="uk-card-body uk-flex uk-flex-middle uk-flex-between">
            <h3 id="category" className="uk-text-uppercase">
              {applicant.name}
            </h3>
            <Image
              image={applicant.image}
              style={{
                position: "static",
                borderRadius: "50%",
                height: 120,
                width: 120,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
