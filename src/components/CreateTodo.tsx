import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import { useTodoStore } from "@/store/todoStore";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const list = useTodoStore((state) => state.list);
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleAddOrEdit = () => {
    if (!title || !description) return;
    addTodo({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
    setEditId(null);
  };
  
  return (
    <div className="flex justify-center mb-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-black text-white hover:bg-gray-900 flex items-center gap-2">
            <PlusCircle size={18} /> {"Add Todo"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white text-black">
          <DialogHeader>
            <DialogTitle>{"Add a new Todo"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-black text-white hover:bg-gray-900 mt-4"
              onClick={handleAddOrEdit}
            >
              {"Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
