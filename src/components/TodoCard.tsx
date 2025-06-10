import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pencil, Trash2, CheckCircle } from "lucide-react"
import { useTodoStore } from "@/store/todoStore"
import EditTodoDialog from "./EditToDoDialog"
import clsx from "clsx"

const TodoCard = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const updateTodo = useTodoStore((state) => state.updateTodo)
  const toggleTodoCompletion = useTodoStore((state) => state.toggleTodoCompletion)

  const [openEditDialog, setOpenEditDialog] = useState(false)
  const handleEditClick = () => setOpenEditDialog(true)

  return (
    <>
      <EditTodoDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        todo={todo}
        onUpdate={(id, updated) => updateTodo(id, { ...todo, ...updated })}
      />
      <Card
        key={todo.id}
        className={clsx(
          "relative bg-white text-black border shadow-md transition-all duration-200",
          todo.completed && "bg-gray-100 opacity-80"
        )}
      >
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex justify-between items-center">
            <span className={clsx(todo.completed && "line-through text-gray-500")}>
              {todo.title}
            </span>
            <div className="flex gap-2 items-center">
              <Button variant="ghost" size="icon" onClick={handleEditClick}>
                <Pencil size={16} className="text-gray-700" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
                <Trash2 size={16} className="text-red-600" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={clsx("text-gray-700", todo.completed && "line-through text-gray-500")}>
            {todo.description}
          </p>
        </CardContent>

        {/* ✅ Completion Tick Icon (toggle on click) */}
        <CheckCircle
          size={22}
          className={clsx(
            "absolute top-3 right-3 cursor-pointer transition-colors duration-200",
            todo.completed ? "text-green-600" : "text-gray-300 hover:text-green-500"
          )}
          onClick={() => toggleTodoCompletion(todo.id)}
          title={todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
        />
      </Card>

      
    </>
  )
}

export default TodoCard
