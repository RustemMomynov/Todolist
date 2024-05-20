import { FC } from "react";

interface TodolistProps {
  title: string;
  subTitle: string;
  description: string;
  tasks: { id: number; title: string; isDone: boolean }[];
}

const Todolist = (props: TodolistProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <p>{props.description}</p>
      <div>
        {props.tasks.map((t) => (
          <div>{t.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
