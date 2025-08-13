'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-4 text-center">
      <p className="text-xl">Value: <span className="font-semibold">{count}</span></p>
      <div className="flex gap-3 justify-center">
        <button className="px-4 py-2 rounded bg-black text-white" onClick={() => setCount(count + 1)}>+1</button>
        <button className="px-4 py-2 rounded border" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

