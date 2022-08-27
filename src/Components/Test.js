import React,{useState} from 'react'


const Test = () => {
const[Counter,setCounter] = useState(0)

  return (
    <div>
    <p>Counter:{Counter}</p>
    <button onClick={()=>setCounter (Counter+ 1)}>+</button>
    <button onClick={()=>setCounter (Counter - 1)}>-</button>
    <button onClick={()=>setCounter (Counter + 10)}>+10</button>
    <button onClick={()=>setCounter (Counter * 0)}>Reset</button>
    
    
    

    </div>
  )
}

export default Test
