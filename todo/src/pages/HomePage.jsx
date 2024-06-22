
import AddProperty from "../components/AddProperty"
import '../css/Home.css'
import { useState } from "react"
import DisplayProperty from "../components/DisplayProperty"
import DisplayJob from "../components/DisplayJob"



export default function HomePage() {
        const [filter, setFilter] = useState({})

        // Load values from context
        
            return (
                <div>
             
                    <DisplayJob /> 
                    {/* <AddProperty /> */}
                </div>
                )
        }