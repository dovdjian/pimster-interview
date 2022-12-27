import { gql, useQuery } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import HomePageBody from "../components/body/homePageBody";
import HomePageHead from "../components/head/homePageHead";
import { initializeApollo } from "../lib/apolloClient";
import styles from "../styles/Home.module.css";

const EXEMPLE_QUERY = gql`
  query exempleQuery {
    launchesPast {
      mission_name
    }
  }
`;

const NEW_QUERY = gql`
  query newQuery {
    launchesPast(limit: 8) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(NEW_QUERY);

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

  await apolloClient.query({ query: NEW_QUERY });

  return {
    props: {},
  };
};

export default Home;
