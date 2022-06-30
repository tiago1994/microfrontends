import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>About (about)</h2>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <button onClick={() => setCount(count - 1)}>Remove One</button>
    </div>
  );
};
