import { useState,useEffect } from 'react'
import Taskform from './componenets/Taskform'
import './index.css'
import TaskList from './componenets/TaskList'
import TaskProgress from './componenets/TaskProgress'
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const updateTask = () => {
    const updatedTasks = tasks.map((task, i) => {
      
    });
    setTasks(updatedTasks);
  }
  const completeTask = (index) => {
    const updatedTasks = tasks.map((task,i)=>{
      if(i==index){
        task.completed = !task.completed;
      }
      return task;
    })
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }
  
  return (
    <>
    <div className='container'>
    <Taskform addTask={addTask}></Taskform>
    <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} completeTask={completeTask}></TaskList>
    <TaskProgress tasks={tasks}></TaskProgress>
    </div>
    </>
  )
}

export default App
