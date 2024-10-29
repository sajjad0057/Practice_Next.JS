"use client";

export default function Button() {
  return (
    <div className="mt-5">
        <button className="bg-green-300 rounded-sm p-2"
         onClick={() => console.log("I have clicked!")}
        >
          click here
        </button>
    </div>
  )
}
