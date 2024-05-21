import { FC } from "react";

export interface TodolistProps {
  title: string;
  tasks: TaskType[];
}

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Todolist = (props: TodolistProps) => {
  const tasksElements = props.tasks.map((task) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {props.tasks.length ? <ul>{tasksElements}</ul> : "Тасок нет"}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Todolist;
