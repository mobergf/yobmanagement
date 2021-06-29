import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import Applicants from "../../components/applicants";

const Stages = ({ allStages, stages }) => {
  console.log(allStages);
  //   const seo = {
  //     metaTitle: stages.title,
  //     metaDescription: stages.description,
  //     shareImage: stages.image,
  //     stages: true,
  //   };
  return (
    <Layout categories={allStages}>
      <div className="uk-container  uk-margin-medium-top">
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
