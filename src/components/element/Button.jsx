import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <Link to="/" className="btn btn-primary btn-lg">
        <FaHome className="mr-2 text-lg align-middle " />
        <p className="text-xl">Back to Home</p>
      </Link>
    </>
  );
};

export default Button;
