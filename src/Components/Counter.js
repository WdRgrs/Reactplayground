import React, { useState } from 'react'

function Counter() {
    const [newNum, setNewNum] = useState(0)

    function plusOne(){
        setNewNum(newNum + 1)
    }
    function minusOne(){
        setNewNum(newNum - 1)
    }
    function plusFive(){
        setNewNum(newNum + 5)
        
    }
    function minusFive(){
        setNewNum(newNum - 5)

    }
    return (
        <fieldset>
            <legend>
                <h1>Counter</h1>
            </legend>
            <h2>Create buttons that increment</h2>
            <h3>Number: {newNum}</h3>
            <button onClick={() => plusOne()}>+1</button>
            <button onClick={() => minusOne()}>-1</button>
            <button onClick={() => plusFive()}>+5</button>
            <button onClick={() => minusFive()}>-5</button>
        </fieldset>
    )
}

export default Counter
