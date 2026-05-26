import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => onFinish(), 800);
    }, 2600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${exit ? "slide-out" : ""}`}>
      {/* Loading bar */}
      <div className="splash-loader" />

      {/* Logo mark */}
      <div className="splash-logo-mark">JD</div>

      <h1 className="splash-title">Janith Dinujaya</h1>
      <p className="splash-sub">Full Stack Developer</p>
    </div>
  );
}

export default SplashScreen;