import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, decrement, increment } from '../../store/slices/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    console.log("Counter value:", count);

    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }
    function handleClear() {
        dispatch(clear())
    }
  return (
    <div className="">
        <div>{count.value}</div>
        <div className="mt-20 flex gap-4">
            <button onClick={handleDecrement} className='bg-gray-700 px-4 py-2 text-white'>Decrement {count.value}</button>
            <button onClick={handleClear} className='bg-gray-700 px-4 py-2 text-white'>Clear {count.value}</button>
            <button onClick={handleIncrement} className='bg-green-700 px-4 py-2 text-white'>Increment {count.value}</button>
        </div>
    </div>
  )
}

export default Counter