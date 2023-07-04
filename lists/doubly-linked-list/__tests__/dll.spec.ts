import DoublyLinkedList from '../doubly-linked-list';

const first = 'first';
const second = 'second';
const third = 'third';
const fourth = 'fourth';

function getFulfilledDLL() {
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
        const dll = getFulfilledDLL()
        const popped = dll.pop();

        expect(dll.tail?.next).toBeNull();
        expect(dll.tail?.value).toBe(second);
        expect(dll.tail?.prev?.value).toBe(first);
        expect(dll.length).toBe(2);
        expect(popped?.value).toBe(third);
        expect(popped?.prev).toBeNull();
    });

    it('should handle the shift method', () => {
        const dll = getFulfilledDLL()
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
    });

    describe('set', () => {
        it('shoudl replace a value at the particular index', () => {
            const dll = getFulfilledDLL();
            const newFirstValue = 'newFirstValue';
            const newLatValue = 'newLastValue';
            const lastIndex = dll.length - 1;

            const firstResult = dll.set(newFirstValue, 0);
            const lastResult = dll.set(newLatValue, lastIndex);

            expect(firstResult).toBe(true);
            expect(lastResult).toBe(true);
            expect(dll.get(0)?.value).toBe(newFirstValue);
            expect(dll.get(lastIndex)?.value).toBe(newLatValue);
        });

        it('should not replace a value if there is nothing to replace', () => {
            const fulfilledDll = getFulfilledDLL();
            const emptyDll = new DoublyLinkedList();

            const resultOfSettingInFulfilledDll = fulfilledDll.set('a value', fulfilledDll.length);
            const resultOfSettingInEmptyDll = emptyDll.set('a value', 0);

            expect(resultOfSettingInEmptyDll).toBe(false);
            expect(resultOfSettingInFulfilledDll).toBe(false);
        });
    });
})
