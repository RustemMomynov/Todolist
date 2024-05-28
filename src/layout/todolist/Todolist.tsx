import { FC } from "react";
import { FilterValueType } from "../../App";

export interface TodolistProps {
  title: string;
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  changeFilter: (value: FilterValueType) => void;
}

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Todolist = (props: TodolistProps) => {
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
        <input />
        <button>+</button>
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
