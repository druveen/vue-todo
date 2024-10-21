<template>
  <v-btn :data-test-id="type" :color="color" :type="type" @click="$emit('click')" class="mr-2">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'primary' },
    type: { type: String, default: 'button' },
  },
  emits: ['click'],
};
</script>
