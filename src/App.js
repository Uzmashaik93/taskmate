import { useEffect, useState } from 'react';

import {Header} from "./components/Header";
import {ShowTask} from "./components/ShowTask";
import {AddTask} from "./components/AddTask";

import './App.css';

function App() {

  const [taskList,setTaskLisk]=useState(JSON.parse( localStorage.getItem("taskList")) || []);
  const [task,setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(taskList));
  },[taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskLisk={setTaskLisk} task={task} setTask={setTask} />
      <ShowTask taskList={taskList} setTaskLisk={setTaskLisk} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
