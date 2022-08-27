import React from 'react'


function Car(props){
    return <h3>I am a {props.name}</h3>
}


const Props = () => {

    // var a = "I am a";
  return (
    <div>
      <h1>Who lives in my Garage</h1>
      {/* <h3> I am a ford   </h3>
      <h3> I am a Corolla   </h3>
<h4>{a} Civic</h4> */}

<Car name = "Civic" />
<Car name = "Mehran" />
<Car name = "Toyota" />





    </div>
  )
}

export default Props
