import './App.css';
import AppRouter from './routers/AppRouter';

function App() {
  const tasks = [
    { id: 1, title: "First Task", status: "backlog", userId:1 },
    { id: 2, title: "Second Task", status: "going", userId:1 },
    { id: 3, title: "Third Task", status: "done", userId:1 },
  ]
  const users = [
    {
      id: 1,
      name: "admin",
      email: "admin@admin.com",
      pass: "admin"
    }
  ]
  localStorage.setItem("tasks", JSON.stringify(tasks))  
  localStorage.setItem("users", JSON.stringify(users))  
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
