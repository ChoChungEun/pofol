import { FunctionComponent } from "react";
import { Layout } from "components/layout";
import { Header } from "components/header";
import { Contents } from "components/contents";

const MainPage: FunctionComponent = () => {
  function outer() {
    var a = 2;
    function inner() {
      console.log(a);
    }
    return inner;
  }
  var func = outer();
  func();
  return (
    <Layout>
      <Header />
      <Contents />
    </Layout>
  );
};

export default MainPage;
