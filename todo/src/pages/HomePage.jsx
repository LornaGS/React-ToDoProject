
import AddProperty from "../components/AddProperty"
import '../css/Home.css'
import { useState } from "react"
import DisplayProperty from "../components/DisplayProperty"



export default function HomePage() {
        const [filter, setFilter] = useState({})

        // Load values from context
        
            return (
                <div>
                    HOME PAGE
                    <DisplayProperty /> 
                    <AddProperty />
                </div>
                )
        }