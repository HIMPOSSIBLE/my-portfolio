'use client';

import { useState } from "react";

function Greeting({ name }: { name: string }) {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p>Hi {name}, you clicked {clicks} times.</p>
      <button onClick={() => setClicks(clicks + 1)}>Click me</button>
    </div>
  );
}

export default Greeting;