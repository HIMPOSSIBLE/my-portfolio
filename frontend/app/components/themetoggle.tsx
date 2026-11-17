'use client';

import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
   document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div>
    <p>Current theme: {isDark ? "Dark" : "Light"}</p>
    <button onClick={() => setIsDark(!isDark)}>Theme</button>
    </div>
  );
}

export default ThemeToggle;
