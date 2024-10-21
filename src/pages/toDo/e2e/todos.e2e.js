// cypress/e2e/todos.spec.js
describe('Todos Application', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should load initial todos from sessionStorage', () => {
      // Set initial todos in sessionStorage
      const initialTodos = [
        { id: 1, title: 'Learn Cypress', completed: false, priority: 'critical' },
        { id: 2, title: 'Write tests', completed: false, priority: 'critical' },
      ];
      sessionStorage.setItem('todos', JSON.stringify(initialTodos));
      cy.reload();
  
      cy.get('.v-card-title').find('strong').should('have.length', initialTodos.length);
      cy.get('strong[data-test-id="title-learn-cypress"]').contains('LEARN CYPRESS');
      cy.get('strong[data-test-id="title-write-tests"]').contains('WRITE TESTS');
    });
  
    it('should add a new todo', () => {
      const newTodo = { id: 3, title: 'NEW TODO', completed: false, priority: 'critical' };
  
      // Click on the add button to open the form
      cy.get('[data-test-id="add-todo-critical"]').click();

      // Add a new todo
      cy.get('input[test-id="Title"]').type(newTodo.title);
      cy.get('button[data-test-id="submit"]').click();
  
      // Check if the new todo is added
      cy.get('strong[data-test-id="title-new-todo"]').contains(newTodo.title);
    });
  
    // it('should update a todo', () => {

    // });
  
    // it('should complete a todo', () => {
  
    // });
  
    // it('should delete all todos with a specific priority', () => {
     
    // });
  });