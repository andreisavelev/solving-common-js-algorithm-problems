import DoublyLinkedList from '../doubly-linked-list';

function fulFIllDLL() {
    const dll = new DoublyLinkedList();
    const first = 'first';
    const second = 'second';
    const third = 'third';

    dll.push(first);
    dll.push(second);
    dll.push(third);

    return {
        dll,
        first,
        second,
        third
    }
}

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
        const {
            dll,
            first,
            second,
            third
        } = fulFIllDLL()

        const popped = dll.pop();

        expect(dll.tail?.next).toBeNull();
        expect(dll.tail?.value).toBe(second);
        expect(dll.tail?.prev?.value).toBe(first);
        expect(dll.length).toBe(2);
        expect(popped?.value).toBe(third);
        expect(popped?.prev).toBeNull();
    });

    it('should handle the shift method', () => {
        const {
            dll,
            first,
            second,
            third
        } = fulFIllDLL()

        const shifted = dll.shift();

        expect(shifted?.value).toBe(first);
        expect(shifted?.next).toBeNull();
        expect(dll.head?.value).toBe(second);
        expect(dll.head?.prev).toBeNull();
        expect(dll.head?.next?.value).toBe(third);
        expect(dll).toHaveLength(2);

        dll.shift();
        expect(dll.head?.next).toBeNull();
        expect(dll.head?.value).toBe(third);
        expect(dll.tail?.value).toBe(third);

        dll.shift();
        expect(dll.head).toBeNull();
        expect(dll.tail).toBeNull();
        expect(dll).toHaveLength(0)
    })
})
