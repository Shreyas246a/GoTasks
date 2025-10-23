const TaskProgress = ({tasks}) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const percentage = totalTasks ===0?0 : Math.round((completedTasks / totalTasks)*100);
    return (
    <div className="progress-info">
      <h2>TaskProgress</h2>
      <p>{completedTasks} of {totalTasks} tasks completed</p>
      <div className="bar">
     <div className="progress" style={{width: `${percentage}%`}}><span>{percentage}%</span></div>
    </div>
    </div>
  )
}

export default TaskProgress
