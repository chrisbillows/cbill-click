"use client";
import { useState, useEffect } from "react";

function foo(myVar: number): void {
  console.log("Count changey-ed!", myVar);
}

function hot_pinky(): void {
  document.body.style.backgroundColor = "hotpink";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1300);
}

export default function Counter() {
  const [currentCount, setCurrentCount] = useState<number>(0);
  const incrementCounter = (): void => setCurrentCount(currentCount + 1);
  const resetCounter = (): void => setCurrentCount(0);

  useEffect(() => {
    foo(currentCount);
  }, [currentCount]);

  useEffect(() => {
    if (currentCount === 10) {
      hot_pinky();
    }
  }, [currentCount]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Current count: {currentCount}</h1>
      <button
        onClick={incrementCounter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={resetCounter}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
      >
        Reset
      </button>
    </div>
  );
}
