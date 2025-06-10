import { useTodoStore } from "@/store/todoStore"
import TodoCard from "./components/TodoCard"
import { CreateTodo } from "./components/CreateTodo"

function App() {
 const list = useTodoStore((state) => state.list)

 console.log
  return (
    <div className="min-h-screen px-4 py-8 bg-white text-black">
      {/* Add/Edit Todo Button */}
      <CreateTodo/>

      {/* Todo Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((todo) => (
           <TodoCard todo={todo} ></TodoCard>
        ))}
      </div>
    </div>
  )
}

export default App
