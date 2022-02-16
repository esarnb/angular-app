import { Helmet } from "react-helmet";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="My Blog Dashboard page" />
      </Helmet>
      <div>Dashboard</div>
    </>
  );
}

export default Dashboard;
