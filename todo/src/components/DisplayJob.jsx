import {useState, useEffect} from 'react';
import JobCard from './JobCard';
import '../css/PropertyDisplay.css';
import { SiTheboringcompany } from "react-icons/si";


export default function DisplayJob() {
  

    const [apiData, setData] = useState([]);

    useEffect(() => {
     fetch('http://localhost:8001/Jobs')
        .then((response) => response.json())
        .then((data) => setData(data))
            console.log({apiData})
    }, 
  []
  );


 
    return(
       < main>

      <div className="items-grid">
  
          {apiData.map((item) => (
           <JobCard 
             id= {item.id}
             CompanyLogoURL={item.CompanyLogoURL}
             Job={item.Job}
             Company =  {item.Company}
             Salary={item.Salary}
             Type={item.Type}
             Type2={item.Type2}
             Description={item.Description}
             Status={item.Status}
           />
         ))
         }
       </div>

        </main>    
    )
 
};