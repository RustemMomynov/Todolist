import { useState } from "react";
import "./App.css";
import Todolist, { TaskType } from "./layout/todolist/Todolist";

export type FilterValueType = "all" | "completed" | "active";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("all");

  const changeFilter = (value: FilterValueType) => {
    setFilter(value);
  };

  const deleteTask = (id: number) => {
    const result = tasks.filter((t) => t.id !== id);
    setTasks(result);
  };

  let tasksForTodolist = tasks;

  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }

  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
