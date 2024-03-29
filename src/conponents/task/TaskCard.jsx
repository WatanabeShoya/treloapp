import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";

const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
      <Tasks inputText={inputText} taskList={taskList} />
    </div>
  )
}

export default TaskCard
