import logo from './logo.svg';
import './App.css';



 import { useState } from 'react';
 const Hello = (props) => {
  
 
 };
 
 const App = () => {
  const [greetings, setGreetings] = useState('');

 
 const getCurrentTime = () => {
   const CurrentTime = new Date();
   const CurrentHour = CurrentTime.getHours();
   if (CurrentHour >= 5 && CurrentHour < 12) {
      setGreetings('Good morning');
   } else if (CurrentHour >= 12 && CurrentHour < 18) {
    setGreetings('Good afternoon');
   } else if (CurrentHour >= 18 && CurrentHour < 24) {
     setGreetings ('Good night');
   }
 };
 
   return (
     
      <div>
       <p>Greetings</p>
    <button onClick={getCurrentTime}>Click Here</button>
        {greetings}
     </div>
      
   );
 };
 
 export default App;
 
   


