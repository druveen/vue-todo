// src/pages/todo/useTodoForm.js
import { ref, computed } from "vue";
import useTodos from "./useTodos.js";

export default function useTodoForm() {
  const { todos, addTodo, updateTodo, completeTodo, deleteAllTodos } =
    useTodos();

  const formVisible = ref(false);
  const selectedTodo = ref(null);
  const isEditing = ref(false);

  const formTitle = computed(() =>
    isEditing.value ? "Edit Todo" : "Add Todo"
  );

  const openForm = (todo = null) => {
    console.log("openForm called with todo:", todo);

    if (todo && todo.id) {
      // If the todo has an ID, it's an edit action
      console.log("Editing Todo:", todo);
      selectedTodo.value = { ...todo };
      isEditing.value = true;
    } else {
      // Add new todo with the correct priority
      console.log("Adding new Todo with priority:", todo);
      selectedTodo.value = { priority: todo, id: null }; // Initialize a new todo object
      isEditing.value = false;
    }

    formVisible.value = true; // Show the dialog
  };

  const closeForm = () => {
    console.log("Form closed");
    formVisible.value = false;
    selectedTodo.value = null;
    isEditing.value = false;
  };

  const saveTodo = (todo) => {
    console.log("Saving Todo:", todo);

    if (isEditing.value) {
      updateTodo(selectedTodo.value.id, todo);
    } else {
      todo.id = Date.now(); // Assign a unique ID for the new todo
      addTodo(todo);
    }

    closeForm();
  };

  const handleCompleteTodo = (id) => {
    console.log("Completing Todo ID:", id);
    completeTodo(id);
  };

  return {
    formTitle,
    formVisible,
    selectedTodo,
    isEditing,
    openForm,
    closeForm,
    saveTodo,
    handleCompleteTodo,
    todos,
    deleteAllTodos,
  };
}
