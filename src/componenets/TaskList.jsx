const TaskList = ({tasks}) => {
  return (
    <div className="list-container">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title} - {task.priority} - {task.deadline}</li>
        ))}
      </ul>
    </div>
  )
}
export default TaskList
