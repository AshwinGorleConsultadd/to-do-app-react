// components/EditTodoDialog.tsx

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface EditTodoDialogProps {
  open: boolean
  setOpen: (value: boolean) => void
  todo: {
    id: number
    title: string
    description: string
  }
  onUpdate: (id: number, updatedTodo: { title: string; description: string }) => void
}

const EditTodoDialog = ({ open, setOpen, todo, onUpdate }: EditTodoDialogProps) => {
  const [editedTitle, setEditedTitle] = useState(todo.title)
  const [editedDescription, setEditedDescription] = useState(todo.description)

  useEffect(() => {
    if (open) {
      setEditedTitle(todo.title)
      setEditedDescription(todo.description)
    }
  }, [open, todo])

  const handleUpdate = () => {
    if (editedTitle.trim() === "") return
    onUpdate(todo.id, { title: editedTitle, description: editedDescription })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white text-black">
        <DialogHeader >
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 bg-white text-black">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Title</Label>
            <Input
              id="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="col-span-3 "
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Input
              id="description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditTodoDialog
