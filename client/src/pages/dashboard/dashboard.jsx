import { useState } from "react";
import quotes from "./quotes.json";
import colors from "./colors.json";

const Dashboard = () => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(0);
  const [dynamicColorIndex, setDynamicColorIndex] = useState(0);

  const handleQuoteGeneratorButton = () => {
    setRandomQuoteIndex(Math.floor(Math.random() * quotes.length));
    setDynamicColorIndex(Math.floor(Math.random() * colors.length));
  };

  return (
    <div
      className="flex flex-col justify-center text-center main-container"
      style={{ backgroundColor: colors[dynamicColorIndex] }}
    >
      <div className="quote-container">
        <div className="m-10">
          <h1
            className="flex text-white text-3xl font-sans"
            style={{ color: colors[dynamicColorIndex] }}
          >
            {quotes[randomQuoteIndex].quote}
          </h1>
          <div className="flex justify-end mt-6">
            <h1
              className="text-black text-lg font-sans font-light"
              style={{ color: colors[dynamicColorIndex] }}
            >
              - {quotes[randomQuoteIndex].author}
            </h1>
          </div>
          <div className="flex justify-center mt-8 mb-10">
            <button
              className="dashboard-buttons text-sm"
              onClick={handleQuoteGeneratorButton}
              style={{ backgroundColor: colors[dynamicColorIndex] }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-white">
        <span className="font-light mr-1">by</span>Jaymeen
      </div>
    </div>
  );
};

export default Dashboard;
