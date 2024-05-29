
// format the card 
// import React, { useState } from 'react';
import '../css/Display.css'
import CompleteTask from './CompleteTask'



export default function TaskCard ( {name, description, imageUrl, time, priority, id}) {

  return (

  
      <div className="item-card">

          
            
                <img src={imageUrl} width={400} height={250} />
                <button className="btn">New</button>
             
                <p className="p-one" ><span></span>{name}</p>
                <p ClassName="p-three"><span>✾ </span> {time} mins</p>
                <p ClassName="p-four"><span>📓 </span> {priority}</p>
                <p ClassName="p-two"><span> </span> {description}</p>

          
        </div>
   
  )
}
