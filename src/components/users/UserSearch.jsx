import { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import { searchUsers } from "../context/github/GithubAction";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert("Please enter in search bar", "error");
    } else {
      dispatch({ type: "SET_LOAD" });
      const data = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: data });
      // setText("");   // if you want clean after search just remove "//"
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText("");
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-1  mb-8 gap-8 lg:grid-cols-2 xl:grid-cols-2 px-2">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 w-full text-black input input-lg rounded-xl  "
              placeholder="Search"
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 btn h-full w-32 rounded-l-none "
            >
              GO
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost w-32 ">
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
