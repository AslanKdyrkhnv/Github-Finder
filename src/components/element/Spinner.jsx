import spinner from "../assets/Chunk@1x-5.3s-200px-200px.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        width={180}
        className="mx-auto text-center"
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
