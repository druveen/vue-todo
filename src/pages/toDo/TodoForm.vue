<template>
  <v-form @submit.prevent="handleSubmit">
    <BaseInput v-model="localTodo.title" label="Title" required />

    <BaseInput v-model="localTodo.description" label="Description" />
    
    <v-radio-group 
      v-model="localTodo.priority" 
      label="Priority" 
      row 
      class="mb-4"
    >
      <v-radio 
        v-for="(priority, index) in priorities" 
        :key="index" 
        :label="priority.label" 
        :value="priority.value" 
        :style="{ color: priority.color }" 
      />
    </v-radio-group>


    <v-card-actions class="justify-end">
      <BaseButton color="secondary" @click="cancelForm">Close</BaseButton>
      <BaseButton type="submit" color="primary">Save</BaseButton>
    </v-card-actions>
  </v-form>
</template>

<script>
import { reactive, watch } from 'vue';
import BaseInput from '@/components/BaseInput/BaseInput.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import {  priorities } from './todoUtils.js';

export default {
  components: { BaseInput, BaseButton },
  props: {
    todo: {
      type: Object,
      default: () => ({ title: '', description: '', priority: 'moderate' }),
    },
  },
  emits: ['save', 'cancel'],
  setup(props, { emit }) {

    const localTodo = reactive({ ...props.todo });

    watch(
      () => props.todo,
      (newTodo) => {
        Object.assign(localTodo, newTodo || { title: '', description: '', priority: 'moderate' });
      },
      { immediate: true }
    );

    const handleSubmit = () => {
      if (!localTodo.title) {
        console.error('Title is required');
        return;
      }
      emit('save', { ...localTodo });
    };

    const cancelForm = () => {
      emit('cancel');
    };

    return {
      localTodo,
      priorities,
      handleSubmit,
      cancelForm,
    };
  },
};
</script>
