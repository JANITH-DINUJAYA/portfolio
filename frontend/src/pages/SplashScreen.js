import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // show splash for 2.5 seconds then animate out
    const timer = setTimeout(() => {
      setExit(true);

      // after animation complete, remove splash
      setTimeout(() => {
        onFinish();
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${exit ? "slide-out" : ""}`}>
      <h1 className="splash-title">Welcome to My Portfolio</h1>
      <p className="splash-sub">Building Modern Web Experiences</p>
    </div>
  );
}

export default SplashScreen;