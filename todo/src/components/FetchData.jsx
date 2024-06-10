import {useState, useEffect} from 'react'
import TaskCard from './TaskCard';
import '../css/Display.css'


export default function FetchData() {
 
    // const apiUrl = 'http://localhost:8000/Tasks'

    const [apiData, setData] = useState("");

    useEffect(() => {
     fetch('http://localhost:8001/Tasks')
        .then((response) => response.json())
        .then((data) => setData(data))
    }, 
  []
  );
 

 
    return(
       < main>

      <div className="items-grid">
          
          {apiData.map((item) => (
           <TaskCard
            
             name={item.name}
             description={item.description}
             imageUrl={item.imageURL}
             time={item.time}
             priority={item.priority}
             id={item.id}
           />
         ))}
       </div>

        </main>    
    )
 
};

