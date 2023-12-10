import { FunctionComponent } from "react";
import { Layout } from "components/layout";
import { Header } from "components/header";
import { Contents } from "components/contents";

const MainPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header />
      <Contents />
    </Layout>
  );
};

export default MainPage;
