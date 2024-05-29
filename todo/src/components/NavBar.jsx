// Quick Lab 6 Nav bar / routing
import '../css/Nav.css'

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>To Do App</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

         <li>
          <Link to="/AddTask">Add Task</Link>
        </li>

         <li>
           <Link to="/DisplayTask">Display Task</Link>
        </li> 
      </ul>
    </nav>
  );
}