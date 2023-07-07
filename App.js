import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Display=(props)=>{
  return(
   <div>
     <p>
       counter is {props.counter}


    </p>
   </div>
   
  )

}
const Display2=(props)=>{
  return(
    <div>
      <p>
        avg is {props.avg}
      </p>
    </div>
  )

}
const Display3=(props)=>{
  return(
    <div>
      <p>
        positive is {props.positive}
      </p>
    </div>
  )
}
const App=()=>{
  const[clicks ,setclicks]=useState({good:0 , bad:0 , neutral:0})
  
  const inrgood =()=>{
    const newclicks={good:clicks.good+1 , bad:clicks.bad ,neutral:clicks.neutral} 
    setclicks(newclicks)
    calculateaverage()
    calculatepos()

  }
  const inrbad =()=>{
    const newclicks={bad:clicks.bad+1 , good:clicks.good ,neutral:clicks.neutral} 
    setclicks(newclicks)
    calculateaverage()
    calculatepos()

  }
  const inrneutral=()=>{
    const newclicks={neutral:clicks.neutral+1 , bad:clicks.bad ,good:clicks.good} 
    setclicks(newclicks)
    calculateaverage()
    calculatepos()

  }
  const[avg,setAvg]=useState(0)
 const calculateaverage =()=>{
  const totalclicks=(clicks.good+clicks.bad+clicks.neutral)
    const  avg1= (totalclicks/3);
     setAvg(avg1);
     
   
  
    
 }
 const [positive,setpositive]=useState(0)
 const calculatepos=()=>{
  const totalclicks1=(clicks.good+clicks.bad+clicks.neutral)
  const positive=((clicks.good/totalclicks1)*100)
  setpositive(positive)
 }
 


    

    
  
  return(
    <div>
      <p> give feedback</p>
      <p>
        <button onClick={inrgood} text="good">good</button>
      </p>
      <p>
        <button onClick={inrbad} text="bad">bad</button>

      </p>
      <p>
        <button onClick={inrneutral} text="neutral">neutral</button>
      </p>
      
      <br></br>
      good:<Display counter={clicks.good}></Display>
      <br></br>
      bad:<Display counter={clicks.bad}></Display>
      <br></br>
      neutral:<Display counter={clicks.neutral}></Display>
      <br>
      </br>
     {avg}
     <br></br>
     {positive}
  
 
    </div>

  )



    
  
  }



export default App;
