import { Outlet, Link } from "react-router-dom";
import opsci from "./assets/opsci.png"

export default function App() {
  return (
    <div>
      <nav>
        <div
          className="pt-4 pb-2 px-10 border-b"
        >
          <img src={opsci} height={50} width={50} /> |{" "}
          desci-did {"  "}
          <Link to="/ConnectORCID">ORCID</Link> |{" "}
          <Link to="/ConnectTwitter">Twitter</Link> |{" "}
          <Link to="/ConnectGithub">Github</Link> |{" "}
          <Link to="/Dashboard">DASHBOARD</Link> |{" "}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
