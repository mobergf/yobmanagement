import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Applicants from "../../components/applicants";

const Stages = ({ allStages, stages }) => {
  return (
    <Layout categories={allStages}>
      <Seo />
      <div className="uk-container  uk-margin-medium-top">
        <h1>{stages.name}</h1>
        <Applicants applicants={stages.applicants} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const stages = await fetchAPI("/stages");

  return {
    paths: stages.map((stages) => ({
      params: {
        slug: stages.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const stages = await fetchAPI(`/stages?slug=${params.slug}`);
  const allStages = await fetchAPI("/stages");

  return {
    props: { allStages: allStages, stages: stages[0] },
    revalidate: 1,
  };
}

export default Stages;
