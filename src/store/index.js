import { createStore } from 'vuex';
import todo from '@/pages/todo/store.js';

export default createStore({
  modules: {
    todo,
  },
});
