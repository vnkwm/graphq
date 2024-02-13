import JobList from "../components/JobList";
import { getJobs } from "../lib/graphql/queries";

const jobs = await getJobs();

function HomePage() {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
