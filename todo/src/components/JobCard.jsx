import { FaBed, FaBath, FaPoundSign, FaInfo, FaAccusoft ,FaCog,FaCompass } from  "react-icons/fa";
import { SiTheboringcompany } from "react-icons/si";


import '../css/PropertyDisplay.css'

export default function JobCard ( { id, CompanyLogoURL, Job, Company,Salary , Type,Type2, Description, Status}) {



    return (
  
    // const isgarden = {garden} 
        <div className="item-card">
 
              {/* <img src={castle} width={400} height={250}/> */}
              {/* <img src={require(`${imageUrl}`)} width={400} height={250} />  */}
               {/* <img src={CompanyLogoURL} width={100} height={100} />   */}
          
                  {/* <button className="btn">{Status}</button>  */}
               
                {/* <button className="btn">{garden} </button>  */}
               
               
                  <p  ><span>	</span>{Job}</p>
                  <p ClassName="p-four"><span> 	<FaAccusoft /> </span> {Company}</p>
                  <p className="p-two" ><span>< FaPoundSign /> </span>{Salary}</p>
                  <p ClassName="p-three"><span>	<FaCog /> </span> {Type} </p>
                  <p ClassName="p-four"><span> 	<FaCompass /> </span> {Type2}</p>
                  <p ClassName="p-four"><span> 	<FaInfo /> </span> {Description}</p>
               
                  {/* <p ClassName="p-five"><span> Garden </span> {garden}</p>
                  <p ClassName="p-six"><span> </span> {salestatus}</p> */}
  
        
 

          </div>
     
    )
  }