import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const zRef = useRef(0);
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {}, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <button
          className="bg-green-500 text-white p-2 m-4 cursor-pointer"
          onClick={() => {
            x = x + 1;
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let X = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-500 text-white p-2 m-4 cursor-pointer"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State Y = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-500 text-white p-2 m-4 cursor-pointer"
          onClick={() => {
            zRef.current = zRef.current + 1;
          }}
        >
          Increase Z
        </button>
        <span className="font-bold text-xl">Ref Z = {zRef.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};
export default Demo2;
