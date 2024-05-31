import { useState } from "react";
import "./App.css";
import Todolist, { TaskType } from "./layout/todolist/Todolist";
import { v1 } from "uuid";

export type FilterValueType = "all" | "completed" | "active";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Typescript", isDone: false },
    { id: v1(), title: "RTK query", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValueType>("all");

  const changeFilter = (value: FilterValueType) => {
    setFilter(value);
  };

  const deleteTask = (id: string) => {
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

  const addNewTask = (newTask: TaskType) => {
    const updatedTasks = [newTask, ...tasksForTodolist];
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
        addNewTask={addNewTask}
      />
    </div>
  );
}

export default App;
