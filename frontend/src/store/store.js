import { create } from "zustand";

export const useToDo = create((set) => ({
  todos: [
    { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
  ],

  addTodo: (data) =>
    set((state) => [
      ...state.todos,
      { title: data.title, completed: data.completed },
    ]),

  removeTodo: (todoId) =>
    set((state) => state.todos.filter((todo) => todo.id !== todoId)),

  toggleTodoCompleted: (todoId) =>
    set((state) =>
      state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    ),
}));
