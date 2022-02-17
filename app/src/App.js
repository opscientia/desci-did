import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
    <h3>desci-did</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/ConnectORCID">ORCID</Link> |{" "}
        <Link to="/ConnectTwitter">Twitter</Link> |{" "}
        <Link to="/ConnectGithub">Github</Link> |{" "}
        <Link to="/Dashboard">DASHBOARD</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}
