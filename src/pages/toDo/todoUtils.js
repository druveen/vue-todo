
export const priorities = [
  { label: "Critical", value: "critical", color: "red" },
  { label: "Moderate", value: "moderate", color: "orange" },
  { label: "Optional", value: "optional", color: "green" },
];

export const getPriorityLabel = (value) =>
  priorities.find((p) => p.value === value)?.label;

export function filteredTodos(todos, priority) {
    return todos.filter((todo) => todo.priority === priority && !todo.completed);
  }