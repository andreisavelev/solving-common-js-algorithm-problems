import CustomNode from '../utils/node';

class SinglyLinkedList {
    head: null | CustomNode<any>;
    tail: null | CustomNode<any>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: unknown): this {
        // Create a new node using the value passed to the function;
        const node = new CustomNode(value);

        // If there is no head proprty on the list,
        // set the head and tail to be the newly created node
        if (!this.head) {
            this.head = node;
            this.tail = node;

            // Otherwise set the next property on the list to be the node
            // and set the tail property on the list to be the newly created node;
        } else {
            this.tail = node;
            this.head.next = node;
        }

        // Increment the length by one
        this.length += 1;

        // return the Linked List
        return this;
    }
}
