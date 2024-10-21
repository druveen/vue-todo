<template>
    <v-card class="mb-2" elevation="1">
      <v-card-title>
        <slot name="title" :todo="todo">
          {{ todo.title }}
        </slot>
      </v-card-title>
  
      <v-card-subtitle>
        <slot name="description" :todo="todo">
          {{ todo.description }}
        </slot>
      </v-card-subtitle>
  
      <v-card-actions>
        <slot name="actions" :todo="todo">
          <v-btn icon @click="$emit('edit', todo)" data-testid="edit-btn">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="$emit('complete', todo.id)" data-testid="complete-btn">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      todo: { type: Object, required: true },
    },
    emits: ['edit', 'complete'],
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 8px;
  }
  </style>
  