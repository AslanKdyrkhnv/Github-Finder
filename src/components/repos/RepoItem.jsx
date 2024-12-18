import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="card shadow-lg bg-slate-800 transtition  hover:bg-slate-900">
      <div className="card-body text-white">
        <h3 className="text-xl font-semibold mb-4 inline">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p>{description}</p>
        <div className="space-x-2 space-y-2">
          <div className="badge badge-primary font-semibold text-sm">
            <FaEye className="mr-1" /> {watchers_count}
          </div>
          <div className="badge badge-success font-semibold text-sm">
            <FaStar className="mr-1" /> {stargazers_count}
          </div>
          <div className="badge badge-error font-semibold text-sm">
            <FaInfo className="mr-1" /> {open_issues}
          </div>
          <div className="badge badge-warning font-semibold text-sm">
            <FaUtensils className="mr-1" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
