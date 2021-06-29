import React from "react";
import Articles from "../components/articles";
import Applicants from "../components/applicants";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage, applicants, stages }) => {
  return (
    <Layout categories={stages}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container">
          <h1>{homepage.hero.title}</h1>
          {/* <Articles articles={articles} /> */}
          <Applicants applicants={applicants} showStep />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [applicants, stages, homepage] = await Promise.all([
    fetchAPI("/applicants"),
    fetchAPI("/stages"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { applicants, stages, homepage },
    revalidate: 1,
  };
}

export default Home;
