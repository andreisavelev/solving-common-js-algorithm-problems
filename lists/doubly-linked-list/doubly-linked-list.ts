import Node, { TNode } from "./node";

interface IDoublyLinkedList<T> {
    head: TNode<T>
    tail: TNode<T>
    length: number

    /**
     * @param value Adds one elelement to the end of a list and returns the new length of the list;
     */
    push(value: T): number

    /**
     * Removes the last element of a list and returns that element.
     * This method changes the length of the list.
     */
    pop(): TNode<T>

    /**
     * Remove the first element of a list and returns that element.
     * This method changes the length of the list.
     */
    shift(): TNode<T>
}

export default class SinglyLinkedList implements IDoublyLinkedList<string> {
    head: TNode<string>
    tail: TNode<string>
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: string): number {
        const node = new Node(value);

        if (this.isListEmpty()) {
            this.head = node;
            this.tail = node;

            this.incrementLength();

            return this.length;
        }

        this.tail!.next = node;
        node.prev = this.tail;

        this.tail = node;

        this.incrementLength();

        return this.length;
    }

    pop() {
        if (this.isListEmpty()) {
            return null;
        }

        const poppedNode = this.tail;

        if (this.doesListContainOnlyOne()) {
            this.head = null;
            this.tail = null;

            this.decrementLenght();
        } else {
            this.tail = poppedNode!.prev;
            this.tail!.next = null;
            this.decrementLenght();

            poppedNode!.prev = null;
        }

        return poppedNode;
    }

    shift() {
        if (this.isListEmpty()) {
            return null;
        }

        const shiftedNode = this.head;

        if (this.doesListContainOnlyOne()) {
            this.head = null;
            this.tail = null;
            this.decrementLenght();
        } else {
            this.head = shiftedNode!.next;
            this.head!.prev = null;
            this.decrementLenght();

            shiftedNode!.next = null;
        }

        return shiftedNode;
    }

    private incrementLength() {
        this.length += 1;
    }

    private decrementLenght() {
        this.length -= 1;
    }

    private isListEmpty() {
        return this.length === 0;
    }

    private doesListContainOnlyOne() {
        return this.length === 1;
    }
}
