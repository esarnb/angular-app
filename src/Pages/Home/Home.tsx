import { Helmet } from "react-helmet";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My Blog home page" />
      </Helmet>
      <div>Home</div>
    </>
  );
}

export default Home;
