import { useState } from 'react'
import Taskform from './componenets/Taskform'
import './index.css'
import TaskList from './componenets/TaskList'
import TaskProgress from './componenets/TaskProgress'
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  return (
    <>
    <div className='container'>
    <Taskform addTask={addTask}></Taskform>
    <TaskList tasks={tasks}></TaskList>
    <TaskProgress></TaskProgress>
    </div>
    </>
  )
}

export default App
