<template>
  <v-row>
    <v-col v-for="(priority, index) in priorities" :key="priority.value" cols="12" md="4">
      <PriorityCard :label="priority.label" :color="priority.color" :value="priority.value"
        :todos="filteredTodos(todos, priority.value)" @addTodo="$emit('addTodo', priority.value)"
        @deleteAllTodos="$emit('deleteAllTodos', priority.value)">
        <template #default="{ todo }">
          <TodoCard :todo="todo" @edit="$emit('editTodo', todo)" @complete="$emit('completeTodo', todo.id)">
            <!-- Customizing title via slot -->
            <template #title="{ todo }">
              <strong :data-test-id="'title-' + todo.title.toLowerCase().replace(/\s+/g, '-')">{{ todo.title.toUpperCase() }}</strong>
            </template>

            <!-- Customizing description via slot -->
            <template #description="{ todo }">
              <em>{{ todo.description }}</em>
            </template>

            <!-- Customizing actions via slot -->
            <template #actions="{ todo }">

            </template>
          </TodoCard>
        </template>
      </PriorityCard>
    </v-col>
  </v-row>
</template>

<script>
import PriorityCard from '@/components/PriorityCard/PriorityCard.vue';
import TodoCard from '@/components/TodoCard/TodoCard.vue';
import { priorities, filteredTodos } from './todoUtils.js';

export default {
  components: { PriorityCard, TodoCard },
  props: {
    todos: { type: Array, required: true },
  },
  setup(props) {

    const todos = props.todos;

    return {
      priorities,
      filteredTodos,
      todos
    };
  },
};
</script>
