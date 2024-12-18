import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card side compact shadow-md hover:shadow-xl transition p-6 bg-base-100 m-2 border-purple-300 border ">
      <div className="flex flex-row items-center space-x-4">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow-sm w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link className="opacity-40 text-sm font-bold" to={`/user/${login}`}>
            link to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
