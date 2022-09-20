import React, {useState} from 'react';


export default function Counterfunction(){
  
 const [count, setCount] = useState(0);
 
 
   return(
     <div>
     
     <p>You have clicked me {count} times</p>
     <button onClick={()=>setCount(count+1)} >Click me</button>
 
     </div>
   
   );
   

  
  
}
