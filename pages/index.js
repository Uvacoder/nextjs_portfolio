import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GithubRepos from "../components/GithubRepos";
import { getLatestRepos } from "../lib/getLatestRepos";
import userData from "../constants/userData";

export default function Home({ repositories }) {
  return (
    <Layout>
      <Hero />
      <GithubRepos repositories={repositories} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  
  return {
    props: {
      repositories,
    },
  };
};