import React, { useEffect, useState } from "react";
import Applicants from "../components/applicants";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage, applicants, stages }) => {
  const [applicantList, setApplicantList] = useState([]);

  useEffect(() => {
    setApplicantList(applicants);
  }, [applicants]);

  const handleSearch = async (e) => {
    const searchResult = await fetchAPI(
      `/applicants?name_contains=${e.target.value}`
    );
    setApplicantList(searchResult);
  };

  return (
    <Layout categories={stages}>
      <Seo seo={homepage.seo} />
      <div className="uk-container uk-margin-small">
        <h1>{homepage.hero.title}</h1>
        <legend>Sök bland profiler</legend>
        <input
          className="uk-input uk-form-width-large uk-margin-medium-bottom"
          placeholder="Sök på namn"
          onChange={(e) => handleSearch(e)}
        />
        <Applicants applicants={applicantList} showStep />
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
