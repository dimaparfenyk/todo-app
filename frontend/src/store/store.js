import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useToDo = create(
  devtools((set) => ({
    todos: [],

    getAllTodos: async () => {
      const res = await fetch("/api/todos");
      const data = await res.json();
      set({ todos: data.data });
    },

    addTodo: async (newTodo) => {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const data = await res.json();

      set((state) => ({
        todos: [...state.todos, data.data],
      }));
    },

    removeTodo: async (todoId) => {
      const res = await fetch(`/api/todos/${todoId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!data.success) return { success: false, message: data.message };

      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== todoId),
      }));
      return { success: true, message: data.message };
    },

    updateToDo: async (todoId, todo) => {
      const res = await fetch(`/api/todos/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const { data, message } = await res.json();

      const updatedToDo = { ...data, completed: data.completed };

      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === todoId ? updatedToDo : todo
        ),
      }));

      return { success: true, message: message };
    },
  }))
);
