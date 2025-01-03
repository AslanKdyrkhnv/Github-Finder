import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div className="card shadow-xl rounded-xl bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-3xl my-4 font-bold">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
