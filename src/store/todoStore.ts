// store/todoStore.ts
import { create } from 'zustand';

// Define Todo item type
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed?: boolean; // Optional field for completion status
}

// Define the complete store shape
export interface TodoStore {
  list: Todo[] ;
  email: string;
  username: string;
  profile: string;
  
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, updatedTodo: Partial<Omit<Todo, 'id'>>) => void;
  deleteTodo: (id: number) => void;
  toggleTodoCompletion: (id: number) => void;
  setEmail: (email: string) => void;
  setUserInfo: (username: string, email: string, profile: string) => void;
  reset: () => void;
}

// Zustand store implementation
export const useTodoStore = create<TodoStore>((set) => ({
  list: [],
  email: '',
  username: '',
  profile: '',

  addTodo: (todo) =>
    set((state) => ({
      list: [...state.list, todo],
    })),

  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.id === id ? { ...item, ...updatedTodo } : item
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),

  setEmail: (email) => set(() => ({ email })),

  toggleTodoCompletion: (id: number) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),

  setUserInfo: (username, email, profile) =>
    set(() => ({ username, email, profile })),

  reset: () =>
    set(() => ({
      list: [],
      email: '',
      username: '',
      profile: '',
    })),
}));
