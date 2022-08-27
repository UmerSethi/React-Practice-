import React , { useState } from 'react'

const Counter = () => {
const [counter, setCounter] = useState(0)

  return (
    <div>
        
<p>Counter:{counter}</p>
<button onClick={()=>setCounter(counter + 1)}>+</button>
<button onClick={()=>setCounter(counter - 1)}>-</button>
<button onClick={()=>setCounter(counter + 10)}>10+</button>
<button onClick={()=>setCounter(counter * 0)}>RESET</button>


    </div>
  )
}

export default Counter
