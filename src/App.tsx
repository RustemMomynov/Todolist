import "./App.css";
import Todolist, { TaskType } from "./layout/todolist/Todolist";

function App() {
  const tasks: TaskType[] = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS/TS", isDone: false },
    { id: 4, title: "REACT", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} />
    </div>
  );
}

export default App;
