const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div className="w-72 h-48 bg-gray-300 m-4 rounded-lg" key={idx}></div>
        ))}
    </div>
  );
};
export default Shimmer;
