import Button from "../element/Button";
const About = () => {
  return (
    <div className="px-2">
      <div className="text-start lg:max-w-xl sm:max-w-lg">
        <h2 className="text-4xl font-bold mb-4">Github Finder</h2>
        <p className="text-lg font-light mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, nam
          saepe esse maxime aliquam minus sunt minima sed molestiae corrupti
          quam laudantium voluptatem facere sapiente voluptatum corporis alias,
          recusandae necessitatibus!
        </p>
        <p className="text-xl font-bold mb-3">version: v1.0</p>
        <Button />
      </div>
    </div>
  );
};

export default About;
