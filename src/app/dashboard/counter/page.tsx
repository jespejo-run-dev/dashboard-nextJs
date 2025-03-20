'use client'

import { Metadata } from "next";
import { useState } from "react";


export const metadata:Metadata = {
  title: 'Counter',
  description: 'Counter Page',
};

export default function CounterPage() {

  const [counter, setCounter] = useState(5);


  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl font-bold">{counter}</span>

      <div className="flex">
        <button onClick={() => setCounter(counter + 1)} 
                className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 p-2 cursor-pointer">
          +1
        </button>
        <button onClick={() => setCounter(counter - 1)} 
                className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 p-2 cursor-pointer">
          -1
        </button>
      </div>
    </div>
  );
}