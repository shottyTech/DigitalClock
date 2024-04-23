import { useState, useEffect } from 'react'
import {Resixe} from './resixe.jsx'

function App() {
  const[time, setTime] = useState(new Date());

  useEffect(()=>{
    const timeValid = setInterval(()=>{
      setTime(new Date())
    },1000)

      return ()=>{
        clearInterval(timeValid);
    }
  },[])

  function timeForm(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours >= 12? 'PM': 'AM';
    hours = hours % 12 || 12;
    return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)}: ${padZero(meridian)}`
   }
   function padZero(number){
     return (number < 10? '0': '')+number
  }

  return( <div className='DigitalClock'>
  <div className="clock">
    <span> {timeForm()} </span>
  </div>
    <Resixe/>
  </div>
    
    
  );
}

export default App
