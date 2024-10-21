<template>
    <v-dialog 
      :model-value="isVisible" 
      :max-width="maxWidth" 
      @update:modelValue="onClose"
    >
      <v-card>
        <v-card-title>
          <slot name="title"></slot> <!-- Slot for the title -->
        </v-card-title>
  
        <v-card-text>
          <slot name="content"></slot> <!-- Slot for the content -->
        </v-card-text>
  
        <v-card-actions>
          <slot name="actions"></slot> <!-- Slot for the actions -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      maxWidth: {
        type: String,
        default: '600px',
      },
    },
    emits: ['update:isVisible'],
    methods: {
      onClose(newValue) {
        this.$emit('update:isVisible', newValue);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styling adjustments */
  .v-card {
    padding: 16px;
  }
  </style>
  