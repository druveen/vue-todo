import { ref } from 'vue';
import { useSessionStorage } from '@/composables/useSessionStorage/useSessionStorage';

export default function useTodos() {
  const TODOS_KEY = 'todos';

  // Load initial todos from sessionStorage, or use an empty array if not found
  const todos = useSessionStorage(TODOS_KEY, []);


  const addTodo = (todo) => {
    todos.value.push(todo);
  };

  const updateTodo = (id, updatedTodo) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value[index] = { ...updatedTodo, id }; // Update the todo
    }
  };

  const completeTodo = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value[index].completed = true; // Mark todo as completed
    }
  };

  const deleteAllTodos = (priority) => {
    todos.value = todos.value.filter((todo) => todo.priority !== priority);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    completeTodo,
    deleteAllTodos,
  };
}
