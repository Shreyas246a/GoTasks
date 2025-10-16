import Button from "./Button"
import { useState } from "react"
const Taskform = ({addTask}) => {
const [title,setTitle]=useState("")
const [priority,setPriority]=useState("High")
const [deadline,setDeadline]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      priority,
      deadline
    }
    addTask(newTask);
    setTitle("");
    setPriority("High");
    setDeadline("");
  }

  return (
    <div className="taskform">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="tasktitle">Task Title:</label>
        <input type="text" value={title} name="tasktitle" onChange={(e)=>{setTitle(e.target.value)}} className="tasktitle" required/>
        <label htmlFor="priority">Priority:</label>
        <select name="priority" id="priority" onChange={(e)=>{setPriority(e.target.value)}}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label htmlFor="deadline">Deadline:</label>
        <input type="datetime-local" value={deadline} name="deadline" id="deadline" onChange={(e)=>{setDeadline(e.target.value)}} required/>
        <Button name="Add Task"/>
        </form>
      </div>
    </div>
  )
}

export default Taskform
