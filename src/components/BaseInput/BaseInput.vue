<template>
  <v-text-field
    v-bind="inputProps"
    v-model="internalValue"
    :label="label"
    :required="required"
    :test-id="label"
    class="mb-4"
  />
</template>

<script>
export default {
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    inputProps: { type: Object, default: () => ({}) },
  },
  emits: ['update:modelValue'],
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
