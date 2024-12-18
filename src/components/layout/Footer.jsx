import { FaStar } from "react-icons/fa";
const Footer = () => {
  const FullYear = new Date().getFullYear();
  return (
    <footer className="footer-center p-8 bg-gray-700 text-white">
      <FaStar className="text-2xl mb-2" />
      <p>CopyRight &copy; {FullYear} all right</p>
    </footer>
  );
};

export default Footer;
