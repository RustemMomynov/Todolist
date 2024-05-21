import "./App.css";
import Todolist, { TaskType } from "./layout/todolist/Todolist";

function App() {
  const tasks: TaskType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
  ];

  const tasks1: TaskType[] = [];

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} />
      <Todolist title="What to learn" tasks={tasks1} />
    </div>
  );
}

export default App;
