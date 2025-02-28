import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [inputText, setInputText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(() => {
    findPrime(inputText);
  }, [inputText]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <button
        className="m-10 p-2 bg-green-200"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Toggle
      </button>
      <input
        type="number "
        className="border border-black w-70 p-2 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};
export default Demo;
