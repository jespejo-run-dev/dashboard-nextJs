'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Pops {
    value: number
}

export const CartCounter = ({value = 0}: Pops) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initCounterState(value))
    }, [dispatch, value])

  return (
    <>
    <span className="text-9xl font-bold">{count}</span>
        <div className="flex">
        <button 
                onClick={() => dispatch(addOne())} 
                className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 p-2 cursor-pointer">
            +1
        </button>
        <button 
                onClick={() => dispatch(substractOne())} 
                className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 p-2 cursor-pointer">
            -1
        </button>
    </div>
    </>
  )
}
