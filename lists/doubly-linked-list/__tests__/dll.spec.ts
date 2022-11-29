import DoublyLinkedList from '../doubly-linked-list';

describe('DLL', () => {
    it('should have head, tail & length property', () => {
        const dll = new DoublyLinkedList();

        expect(dll).toHaveProperty('head');
        expect(dll).toHaveProperty('tail');
        expect(dll).toHaveProperty('length');
    });

    it('should push elements and the end of a list', () => {
        const dll = new DoublyLinkedList();
        const first = 'first';
        const second = 'second';

        dll.push(first);

        expect(dll.tail?.value).toBe(first);
        expect(dll.head?.value).toBe(first);
        expect(dll.length).toBe(1);

        dll.push(second);

        expect(dll.head?.value).toBe(first);
        expect(dll.tail?.value).toBe(second);
        expect(dll.length).toBe(2);
    });

    it('should handle the pop method', () => {
        const dll = new DoublyLinkedList();
        const first = 'first';
        const second = 'second';
        const third = 'third';

        dll.push(first);
        dll.push(second);
        dll.push(third);

        const popped = dll.pop();

        expect(dll.tail?.next).toBeNull();
        expect(dll.tail?.value).toBe(second);
        expect(dll.tail?.prev?.value).toBe(first);
        expect(dll.length).toBe(2);
        expect(popped?.value).toBe(third);
    });
})
