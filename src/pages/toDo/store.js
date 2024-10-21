// pages/todo/store.js
export default {
    state: () => ({
      todos: [],
    }),
    mutations: {
      addTodo(state, todo) {
        state.todos.push(todo);
      },
      deleteTodo(state, index) {
        state.todos.splice(index, 1);
      },
      updateTodo(state, { index, text }) {
        state.todos[index].text = text;
      },
    },
    actions: {
      addTodoAction({ commit }, todo) {
        commit('addTodo', todo);
      },
      deleteTodoAction({ commit }, index) {
        commit('deleteTodo', index);
      },
      updateTodoAction({ commit }, payload) {
        commit('updateTodo', payload);
      },
    },
    getters: {
      getTodos: (state) => state.todos,
    },
  };
  