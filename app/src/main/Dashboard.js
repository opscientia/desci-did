export default function Dashboard() {
    const USERNAME = "kinshuk.eth"
    const ORCID = "1234-5678-987"
    const GITHUB = "github.com/kinshukk"
    const TWITTER = "@kashyap_kinshuk"
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>{USERNAME}</h2>
      <>Github: {GITHUB}</><br/>
      <>Twitter: {TWITTER}</><br/>
      <>ORCID: {ORCID}</><br/>

    </main>
  );
}
