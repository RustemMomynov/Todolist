import { FC, useRef, useState } from "react";
import { FilterValueType } from "../../App";
import { v1 } from "uuid";

export interface TodolistProps {
  title: string;
  tasks: TaskType[];
  deleteTask: (id: string) => void;
  changeFilter: (value: FilterValueType) => void;
  addNewTask: (newTask: TaskType) => void;
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

const Todolist = (props: TodolistProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleInputChange = (e: any) => {
    setNewTaskTitle(e.target.value);
  };

  const createNewTask = (e: any) => {
    e.preventDefault();
    if (newTaskTitle) {
      props.addNewTask({ id: v1(), title: newTaskTitle, isDone: false });
      setNewTaskTitle("");
    } else alert("Напишите название задачи");
  };

  const tasksElements = props.tasks.map((task, index) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
        <button
          onClick={() => {
            props.deleteTask(task.id);
          }}
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <form action="">
          <input
            type="text"
            value={newTaskTitle}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.charCode === 13) {
                createNewTask(e);
              }
            }}
          />
          <button onClick={createNewTask}>+</button>
        </form>
      </div>
      {props.tasks.length ? <ul>{tasksElements}</ul> : "Тасок нет"}
      <div>
        <button
          onClick={() => {
            props.changeFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Todolist;
