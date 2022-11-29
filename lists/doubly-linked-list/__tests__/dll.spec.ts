import DoublyLinkedList from '../doubly-linked-list';

const first = 'first';
const second = 'second';
const third = 'third';
const fourth = 'fourth';

function fulFIllDLL() {
    const dll = new DoublyLinkedList();


    dll.push(first);
    dll.push(second);
    dll.push(third);

    return dll;
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
        const dll = fulFIllDLL()
        const popped = dll.pop();

        expect(dll.tail?.next).toBeNull();
        expect(dll.tail?.value).toBe(second);
        expect(dll.tail?.prev?.value).toBe(first);
        expect(dll.length).toBe(2);
        expect(popped?.value).toBe(third);
        expect(popped?.prev).toBeNull();
    });

    it('should handle the shift method', () => {
        const dll = fulFIllDLL()
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
    });

    it('should handle the unshift method', () => {
        const dll = new DoublyLinkedList();
        const first = 'first';
        const second = 'second';

        dll.unshift(first);
        expect(dll.head?.value).toBe(first);
        expect(dll.tail?.value).toBe(first);
        expect(dll).toHaveLength(1);

        dll.unshift(second);
        expect(dll.head?.value).toBe(second);
        expect(dll.head?.prev).toBeNull();
        expect(dll.head?.next?.value).toBe(first);
        expect(dll).toHaveLength(2);
    });

    it('should handle the get method', () => {
        const dll = new DoublyLinkedList();

        expect(dll.get(0)).toBeNull();
        expect(dll.get(2)).toBeNull();

        dll.push(first);
        let node = dll.get(0);

        expect(node?.value).toBe(first)

        dll.push(second);
        dll.push(third);

        node = dll.get(2);
        expect(node?.value).toBe(third);

        dll.push(fourth);
        node = dll.get(2);
        expect(node?.value).toBe(third);

        node = dll.get(1);
        expect(node?.value).toBe(second);

        node = dll.get(3);
        expect(node?.value).toBe(fourth);
    })
})
