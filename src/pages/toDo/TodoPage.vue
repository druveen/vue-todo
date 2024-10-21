<template>
  <v-container class="py-5">
    <v-row>
      <v-col class="text-center">
        <h1 class="mb-5">Todo List</h1>
      </v-col>
    </v-row>

    <TodoList :todos="todos" @editTodo="openForm" @completeTodo="handleCompleteTodo" @deleteAllTodos="deleteAllTodos"
      @addTodo="openForm" />

    <!-- Using BaseDialog with dynamic slots -->
    <BaseDialog :isVisible="formVisible" @update:isVisible="formVisible = $event">
      <template #title>{{ formTitle }}</template>
      <template #content>
        <TodoForm :todo="selectedTodo || { title: '', description: '', priority: 'moderate' }" @save="saveTodo"
          @cancel="closeForm" />
      </template>
    </BaseDialog>

  </v-container>
</template>

<script>
import { ref, computed } from 'vue';
import TodoList from './TodoList.vue';
import TodoForm from './TodoForm.vue';
import BaseDialog from '@/components/BaseDialog/BaseDialog.vue';
import useTodos from './useTodos.js';
import useTodoForm from './useTodoForm.js';

export default {
  components: { TodoList, TodoForm, BaseDialog },
  setup() {
    // const { addTodo, updateTodo, completeTodo } = useTodos(); 
    // const { todos, addTodo, updateTodo, completeTodo,  deleteAllTodos } = useTodos();

    // const formVisible = ref(false);
    // const selectedTodo = ref(null);
    // const isEditing = ref(false);
    // const formTitle = computed(() => (isEditing.value ? 'Edit Todo' : 'Add Todo'));

    const { formTitle, formVisible, selectedTodo, isEditing, openForm, closeForm, saveTodo, handleCompleteTodo, todos,
      deleteAllTodos } = useTodoForm();


    // const openForm = (todo = null) => {
    //   console.log('openForm called with todo:', todo);

    //   if (todo && todo.id) {
    //     // If the todo has an ID, it's an edit action
    //     console.log('Editing Todo:', todo);
    //     selectedTodo.value = { ...todo };
    //     isEditing.value = true;
    //   } else {
    //     // Add new todo with the correct priority
    //     console.log('Adding new Todo with priority:', todo);
    //     selectedTodo.value = { priority: todo, id: null }; // Initialize a new todo object
    //     isEditing.value = false;
    //   }

    //   formVisible.value = true; // Show the dialog
    // };

    // const closeForm = () => {
    //   console.log('Form closed');
    //   formVisible.value = false;
    //   selectedTodo.value = null;
    //   isEditing.value = false;
    // };

    // const saveTodo = (todo) => {
    //   console.log('Saving Todo:', todo);

    //   if (isEditing.value) {
    //     updateTodo(selectedTodo.value.id, todo);
    //   } else {
    //     todo.id = Date.now(); // Assign a unique ID for the new todo
    //     addTodo(todo);
    //   }

    //   closeForm();
    // };

    // const handleCompleteTodo = (id) => {
    //   console.log('Completing Todo ID:', id);
    //   completeTodo(id);
    // };

    return {
      todos,
      formVisible,
      selectedTodo,
      formTitle,
      openForm,
      closeForm,
      saveTodo,
      handleCompleteTodo,
      deleteAllTodos,
    };
  },
};
</script>
