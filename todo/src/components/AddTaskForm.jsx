import {useState} from 'react'
import '../css/AddTask.css'


export default function AddTaskForm () {

    // create state

    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [url, setImageURL] = useState(''); 
    const [time, setTime] = useState(0); 
    const [priority, setPriority] = useState('Easy'); 



    const handleSubmit = (e) => {

        // tells the event if the event doesnt get handled dont use the default action as I want to do something else
        e.preventDefault();
        const task = {name, description, url, time, priority}
        // const apiURL = {http://localhost:8000/animals'}
        fetch('http://localhost:8000/Tasks',
        
        {

                method: 'POST',
                // for most api json call
                headers: {"Content-Type" : "application/json"},
                // changing into json data
                body: JSON.stringify(task)

        }
    )


        alert("New Task Added")

        // reset text boxes
        setName('')
        setDescription('')
        setImageURL('')
        setTime('')
        setPriority('')

    }

    return(

        <form onSubmit={handleSubmit}>
           <label>Name of Task : </label>
            <input type='text'
            required
            value={name}
            // event
            onChange={(e) => setName(e.target.value)} />

            <br />   <br />   <br />

            <label>Description  : </label>
            <input type='text'
            required
            value={description}
            // event is on change ,  target value is whats in the input box
            onChange={(e) => setDescription(e.target.value)} />

            <br />   <br />   <br />

            <label>Link to photo : </label>
            <input type='text'
            required
            value={url}
            // event
            onChange={(e) =>setImageURL(e.target.value)} />

            <br />   <br />   <br />

            <label>Time to Complete : </label>
            <input type='text'
            required
            value={time}
            // event
            onChange={(e) =>setTime(e.target.value)} />

            <br />   <br />   <br />

            <label>Priority : </label>
            <select 
                    value={priority}
            // event
            onChange={(e) =>setPriority(e.target.value)} >
                 <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
            </select>
            <br />   <br />   <br />


            <button>Add Task</button>
        </form>

    )


}