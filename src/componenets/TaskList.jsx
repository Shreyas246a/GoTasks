import Button from "./Button"

const TaskList = ({tasks,removeTask,updateTask,completeTask}) => {
  return (
    <div className="list-container">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="tasks">
          {task.completed?<s>{task.title}({task.priority})-{new Date(task.deadline).toTimeString().slice(0,5)}</s>:<>{task.title}({task.priority})-{new Date(task.deadline).toTimeString().slice(0,5)}</>}
            <Button onClick={() => removeTask(index)} name={"Delete"}></Button>
            <Button onClick={() => completeTask(index)} name={  task.completed?  "Undo" : "Complete"}></Button>
            </div>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default TaskList
