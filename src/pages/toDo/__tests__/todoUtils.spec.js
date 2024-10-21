import { describe, it, expect } from 'vitest';
import { priorities, getPriorityLabel, filteredTodos } from '../todoUtils';

describe('todoUtils', () => {
    describe('getPriorityLabel', () => {
        it('should return the correct label for a given priority value', () => {
            expect(getPriorityLabel('critical')).toBe('Critical');
            expect(getPriorityLabel('moderate')).toBe('Moderate');
            expect(getPriorityLabel('optional')).toBe('Optional');
        });

        it('should return undefined for an unknown priority value', () => {
            expect(getPriorityLabel('unknown')).toBeUndefined();
        });
    });

    describe('filteredTodos', () => {
        const todos = [
            { id: 1, title: 'Task 1', priority: 'critical', completed: false },
            { id: 2, title: 'Task 2', priority: 'moderate', completed: true },
            { id: 3, title: 'Task 3', priority: 'optional', completed: false },
            { id: 4, title: 'Task 4', priority: 'critical', completed: true },
            { id: 5, title: 'Task 5', priority: 'moderate', completed: false },
        ];

        it('should return only todos with the specified priority that are not completed', () => {
            expect(filteredTodos(todos, 'critical')).toEqual([
                { id: 1, title: 'Task 1', priority: 'critical', completed: false },
            ]);

            expect(filteredTodos(todos, 'moderate')).toEqual([
                { id: 5, title: 'Task 5', priority: 'moderate', completed: false },
            ]);

            expect(filteredTodos(todos, 'optional')).toEqual([
                { id: 3, title: 'Task 3', priority: 'optional', completed: false },
            ]);
        });

        it('should return an empty array if no todos match the specified priority', () => {
            expect(filteredTodos(todos, 'unknown')).toEqual([]);
        });

        it('should return an empty array if all todos with the specified priority are completed', () => {
            expect(filteredTodos(todos, 'critical')).toEqual([
                { id: 1, title: 'Task 1', priority: 'critical', completed: false },
            ]);
        });
    });
});