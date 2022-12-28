import { useQuery } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import HomePageBody from "../components/body/homePageBody";
import HomePageHead from "../components/head/homePageHead";
import { initializeApollo } from "../lib/apolloClient";
import LAUNCH_CARD_QUERY from "../lib/queries/launchCardQuery";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(LAUNCH_CARD_QUERY);

  if (error) return <>{"An error occured fetching data"}</>;
  if (loading) return <>{"Loading"}</>;

  return (
    <div className={styles.container}>
      <HomePageHead />
      <HomePageBody data={data} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: LAUNCH_CARD_QUERY });

  return {
    props: {},
  };
};

export default Home;
