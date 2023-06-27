import TooltipTippy from "@/components/TooltipTippy";
import { useState } from "react";

export default function Tippy() {
  const [place, setPlace] = useState("top");

  return (
    <div className="App pl-[500px]">
      <h1 className="mb-10">Floating UI TooltipTippy</h1>
      <TooltipTippy place={place} />
      <h2>Hola</h2>
      <div className="flex gap-4">
        <button
          className="p-2 border bg-gray-400 rounded-md"
          onClick={() => setPlace("left")}
        >
          Left
        </button>
        <button
          className="p-2 border bg-gray-400 rounded-md"
          onClick={() => setPlace("right")}
        >
          Right
        </button>
        <button
          className="p-2 border bg-gray-400 rounded-md"
          onClick={() => setPlace("top")}
        >
          Top
        </button>
        <button
          className="p-2 border bg-gray-400 rounded-md"
          onClick={() => setPlace("bottom")}
        >
          Bottom
        </button>
      </div>
    </div>
  );
}
