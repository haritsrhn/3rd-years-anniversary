import Confetti from "react-confetti";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";
import { useState } from "react";

function App() {
  const [annivMessage, setAnnivMessage] = useState([
    "Knock, Knock.",
    "Reflecting on our journey together fills my heart with joy. As our anniversary approaches, I'm grateful for every moment we've shared and excited for all the beautiful memories yet to come. Here's to us and the love that continues to grow stronger each day.",
    "❤️",
  ]);

  const timeLeft = () => {
    const annivDate = new Date("January 6, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = annivDate - now;
    return difference;
  };

  return (
    <>
      <Confetti />
      <div
        className="flex justify-center items-center min-h-screen flex-col gap-4"
        style={{
          backgroundColor: "#00A86B",
          color: "white",
        }}
      >
        <span className="font-bold text-4xl text-center px-4 z-50">
          <Typewriter
            words={annivMessage}
            loop={false}
            cursor
            cursorStyle={"_"}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>

        <div className="font-bold text-2xl z-50">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setAnnivMessage([
                "Happy",
                "3rd",
                "Anniversary",
                "Lily Mahvira Zain❤️",
                "Happy 3rd Annivesary Lily Mahvira Zain❤️",
              ])
            }
          />
        </div>
        <footer className="text-center text-sm mt-8">
          &copy; {new Date().getFullYear()} By your beloved boy, Harits.
        </footer>
      </div>
    </>
  );
}

export default App;
