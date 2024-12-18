import Button from "../element/Button";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold mb-4">Oops!</h2>
          <p className="text-4xl font-bold mb-4">404 - Page not Found!</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
