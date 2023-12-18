import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const addTask = (task) => {
    console.log("Завдання в Main", task);

    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: true,
    };

    setList((list) => [...list, newTask]);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList([...newList]);
  };

  const completeTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    setList([...newList]);
  };

  return (
    <div className="main">
      <h1 className="title">Список Задач</h1>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
