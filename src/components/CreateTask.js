import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Заповніть поле");
      return;
    }

    if (task.length > 16) {
      alert("Максимальна кількість 16 символів");
      return;
    }

    // console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        value={task}
        type="text"
        placeholder="Напиши задачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="btn" type="submit">
        Додати
      </button>
    </form>
  );
}
