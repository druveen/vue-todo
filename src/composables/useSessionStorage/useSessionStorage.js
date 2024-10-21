import { ref, watch } from 'vue';

export function useSessionStorage(key, initialValue) {
  const storedValue = ref(JSON.parse(sessionStorage.getItem(key)) || initialValue);

  watch(storedValue, (newValue) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
  }, { deep: true });

  return storedValue;
}