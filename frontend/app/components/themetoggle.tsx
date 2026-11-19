'use client';

import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      setIsDark(localStorage.getItem("theme") === "dark");
    } catch {}
  }, []);

  // Runs whenever isDark changes: update the <body> class
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  function handleClick() {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <div>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
      <button onClick={handleClick}>Theme</button>
    </div>
  );
}

export default ThemeToggle;