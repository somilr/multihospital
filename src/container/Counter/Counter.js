import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/action/counter.action'


export default function Counter() {
    const c = useSelector(state=>state.counter)
    
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(incrementCounter())
    }

    const handledecrement = () => {
        dispatch(decrementCounter())
    }
  return (
    <div>
        <button onClick={() => handleincrement()}>+</button>
        <p>{c.counter}</p>
        <button onClick={() => handledecrement()}>-</button>
    </div>
  )
}
