'use client'

import { useState } from "react";

interface Pops {
    value: number
}

export const CartCounter = ({value = 0}: Pops) => {

    const [counter, setCounter] = useState(value);

  return (
    <>
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
    </>
  )
}
