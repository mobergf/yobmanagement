import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";

import Seo from "../../components/seo";
import Form from "../../components/form";
const Create = ({ allStages, create }) => {
  return (
    <Layout categories={allStages}>
      <Seo />
      <div className="uk-container uk-margin-small-top">
        <h1>{create.heading}</h1>
        <Form allStages={allStages} isNew />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const create = await fetchAPI("/create");
  const allStages = await fetchAPI("/stages");

  return {
    props: { allStages: allStages, create: create },
    revalidate: 1,
  };
}

export default Create;
