
// format the card 
// import React, { useState } from 'react';
import '../css/Display.css'
import CompleteTask from './CompleteTask'


export default function TaskCard ( {name, description, imageUrl, time, priority, id}) {


// console.log({description})


  return (

  
      <div className="item-card">
               <h3>To Do </h3>
          
           <CompleteTask />
           

                <p ><span> Task: </span>{name}</p>
                <img src={imageUrl} width={200} height={250} />
                <p ><span>Description :</span> {description}</p>
                <p ><span>Time to complete :</span> {time} mins</p>
                <p ><span>Priority:</span> {priority}</p>

           
        </div>
   
  )
}
