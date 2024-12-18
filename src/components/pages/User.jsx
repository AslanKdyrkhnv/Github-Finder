import { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../element/Spinner";
import RepoList from "../repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubAction";

const User = () => {
  const { dispatch, user, loading, repos } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOAD" });
    const getUserAsync = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };
    getUserAsync();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <Link to="/" className="btn btn-ghost text-xl mb-2">
          Back to Home
        </Link>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className=" mb-6 md:mb-0 relative">
            <img
              src={avatar_url}
              alt=""
              className="rounded-xl  mx-auto md:mx-0"
            />
          </div>

          <div className="col-span-2">
            {/* top */}
            <div className="mb-6">
              <h1 className="text-3xl card-title ">
                {name || login}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="my-4">{bio}</p>
              <div className="card-actions">
                <a
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                  href={html_url}
                >
                  Visit Github
                </a>
              </div>
            </div>

            <div className="stats   bg-base-100 shadow-lg w-full rounded-lg ">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg md:text-md ">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">blog</div>
                  <div className="stat-value text-lg md:text-md ">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg md:text-md ">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="stats grid-cols-4 bg-base-100 shadow-lg w-full py-5  mb-8">
          <div className="stat px-3">
            <div className="stat-title text-md">Followers</div>
            <div className="stat-value text-lg">{followers}</div>
            <div className="stat-figure">
              <FaUsers className="text-3xl md:text-5xl text-purple-400" />
            </div>
          </div>
          <div className="stat px-3">
            <div className="stat-title text-md">Following</div>
            <div className="stat-value text-lg">{following}</div>
            <div className="stat-figure">
              <FaUserFriends className="text-3xl md:text-5xl text-purple-400" />
            </div>
          </div>
          <div className="stat px-3">
            <div className="stat-title text-md">Public Repos</div>
            <div className="stat-value text-lg">{public_repos}</div>
            <div className="stat-figure">
              <FaCodepen className="text-3xl md:text-5xl text-purple-400" />
            </div>
          </div>
          <div className="stat px-3">
            <div className="stat-title text-md">Public Gists</div>
            <div className="stat-value text-lg">{public_gists}</div>
            <div className="stat-figure">
              <FaStore className="text-3xl md:text-5xl text-purple-400" />
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
