import React from "react";

export const AddTask = ({taskList, setTaskLisk,task,setTask}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    if(task.id){
      const date = new Date();
      const updatedTaskList = taskList.map((todo)=>(
        todo.id === task.id ? {id:todo.id , name :task.name, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo 
      ))
      setTaskLisk(updatedTaskList);
      setTask([]);

    }else{
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskLisk([...taskList, newTask]);
      setTask([]);
    };
    }

   

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          placeholder="add task"
          autoComplete="off"
          maxLength="25"
          onChange={e=>setTask({...task, name: e.target.value})}
        />
        <button type="submit">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};
