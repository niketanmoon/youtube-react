import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
