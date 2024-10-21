<template>
  <v-card class="mb-4 priority-card" elevation="2">
    <v-card-title class="d-flex align-center">
      <span class="priority-indicator" :style="{ backgroundColor: color }"></span>
      <span class="ml-2">{{ label }}</span>

      <v-spacer />

      <v-icon small class="icon-action" :id="`add-todo-${label.toLowerCase()}`"
        :data-test-id="`add-todo-${label.toLowerCase()}`" @click="handleAddTodo">
        mdi-plus
      </v-icon>

      <v-icon small class="icon-action" :id="`add-todo-${label.toLowerCase()}`"
        :data-test-id="`delete-todo-${label.toLowerCase()}`" @click="$emit('deleteAllTodos', value)">
        mdi-delete
      </v-icon>
    </v-card-title>

    <v-card-text>
      <div v-if="todos.length === 0">
        <p>No tasks under {{ label }}.</p>
      </div>
      <v-row>
        <v-col v-for="todo in todos" :key="todo.id" cols="12">
          <slot :todo="todo" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    color: { type: String, required: true },
    value: { type: String, required: true }, // priority value
    todos: { type: Array, required: true },
  },
  emits: ['addTodo', 'deleteAllTodos'],
  methods: {
    handleAddTodo() {
      // Emit a new empty todo with the priority value
      this.$emit('addTodo', { title: '', description: '', priority: this.value });
    },
  },
};
</script>

<style scoped>
.priority-card {
  min-width: 300px;
  min-height: 250px;
}

.priority-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.icon-action {
  margin-left: 8px;
  cursor: pointer;
}
</style>