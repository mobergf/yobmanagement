import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import { updateAPI } from "../../lib/api";

const Applicant = ({ applicants, allStages }) => {
  const { address, age, name, email, stage, image, description } = applicants;

  const updateStage = (item) => {
    const newBob = applicants;
    newBob.stage = item;
    updateAPI(`/applicants/${applicants.id}`, newBob);
  };

  return (
    <Layout categories={allStages}>
      <div className="uk-container uk-margin-small-top">
        <div className=" uk-flex uk-flex-start uk-flex-between uk-flex-top uk-flex-wrap">
          <h1 id="category" className="uk-text-uppercase">
            {name}
          </h1>
          <Image
            image={image}
            style={{
              position: "static",
              borderRadius: "50%",
              height: 120,
              width: 120,
              objectFit: "cover",
            }}
          />
        </div>
        <div className="uk-flex uk-flex-wrap uk-margin-medium">
          {allStages.map((item, index) => {
            return (
              <button
                className={
                  item.id === stage.id
                    ? "applicant-button applicant-button--selected"
                    : "applicant-button"
                }
                key={index}
                onClick={() => updateStage(item)}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <hr className="uk-divider-small" />
        <div className="applicant-info">
          <h4>
            Adress: <p>{address}</p>
          </h4>
          <h4>
            Ålder: <p>{age} år</p>
          </h4>
          <h4>
            Email: <p>{email}</p>
          </h4>
        </div>
        <hr className="uk-divider-small" />
        <ReactMarkdown source={description} escapeHtml={false} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const applicants = await fetchAPI("/applicants");
  return {
    paths: applicants.map((applicants) => ({
      params: {
        slug: applicants.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const applicants = await fetchAPI(`/applicants?slug=${params.slug}`);
  const allStages = await fetchAPI("/stages");

  return {
    props: { allStages: allStages, applicants: applicants[0] },
    revalidate: 1,
  };
}

export default Applicant;
