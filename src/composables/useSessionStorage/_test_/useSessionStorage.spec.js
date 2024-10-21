import { ref } from 'vue';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useSessionStorage } from '../useSessionStorage';

describe('useSessionStorage', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';

    beforeEach(() => {
        sessionStorage.clear();
        vi.clearAllMocks();
    });

    it('should initialize with the value from sessionStorage if it exists', () => {
        sessionStorage.setItem(key, JSON.stringify('storedValue'));
        const storedValue = useSessionStorage(key, initialValue);
        expect(storedValue.value).toBe('storedValue');
    });

    it('should initialize with the initial value if sessionStorage is empty', () => {
        const storedValue = useSessionStorage(key, initialValue);
        expect(storedValue.value).toBe(initialValue);
    });

    //More test case we can add here
});