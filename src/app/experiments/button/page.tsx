"use client";

function MyButton() {
  return (
    <button
      onClick={() => alert("I love Stuart Billows!")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
    >
      {"I'm a button"}
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
