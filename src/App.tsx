import AddTodo from "./components/AddTodo"; // Import AddTodo
import Todo from "./components/Todo"; // Import Todo

function App() {
  return (
    <>
      <AddTodo /> {/* Render the AddTodo component */}
      <Todo /> {/* Render the Todo component */}
    </>
  );
}

export default App;