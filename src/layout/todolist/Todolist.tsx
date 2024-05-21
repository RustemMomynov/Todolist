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

const Todolist: FC<TodolistProps> = (props) => {
  const tasksElements = props.tasks.map((task) => {
    return (
      <li>
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
      <ul>{tasksElements}</ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Todolist;
