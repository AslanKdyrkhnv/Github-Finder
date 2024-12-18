import { useContext } from "react";
import Spinner from "../element/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  // useEffect(() => {
  //   // fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
