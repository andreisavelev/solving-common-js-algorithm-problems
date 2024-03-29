import Node, { TNode } from "./node";

interface IDoublyLinkedList<T> {
  head: TNode<T>;
  tail: TNode<T>;
  length: number;

  /**
   * @param value Adds one element to the end of a list and returns the new length of the list;
   */
  push(value: T): number;

  /**
   * Removes the last element of a list and returns that element.
   * This method changes the length of the list.
   */
  pop(): TNode<T>;

  /**
   * Remove the first element of a list and returns that element.
   * This method changes the length of the list.
   */
  shift(): TNode<T>;

  /**
   * Adds one element to the beginning of a list and returns the new length of the list
   */
  unshift(value: T): number;

  /**
   * Takes an integer value and returns the item at that index.
   */
  get(index: number): TNode<T>;

  /**
   * Replace an available value at a particular index
   */
  set(value: T, index: number): boolean;

  /**
   * Add a node by a certain position
   */
  insert(value: T, index: number): boolean;

  /**
   * Remove a node at certain position
   */
  remove(index: number): TNode<T> | null;
}

export default class DoublyLinkedList implements IDoublyLinkedList<string> {
  head: TNode<string>;
  tail: TNode<string>;
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

      this.decrementLength();
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      this.decrementLength();

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
      this.decrementLength();
    } else {
      this.head = shiftedNode!.next;
      this.head!.prev = null;
      this.decrementLength();

      shiftedNode!.next = null;
    }

    return shiftedNode;
  }

  unshift(value: string) {
    const node = new Node(value);

    if (this.isListEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head!.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.incrementLength();

    return this.length;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    const middle = Math.round(this.length / 2);

    if (index <= middle) {
      let current = this.head;
      let counter = 0;

      while (counter < index) {
        current = current!.next;
        counter += 1;
      }

      return current;
    }

    let current = this.tail;
    let counter = this.length - 1;

    while (counter > index) {
      current = current!.prev;
      counter -= 1;
    }

    return current;
  }

  set(value: string, index: number) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  insert(value: string, index: number): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);

      return true;
    }

    if (index === this.length) {
      this.push(value);

      return true;
    }

    const newNode = new Node(value);
    const node = this.get(index);
    const prevNode = node!.prev;

    prevNode!.next = newNode;
    newNode.prev = prevNode;

    newNode.next = node;
    node!.prev = newNode;

    this.incrementLength();

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const currentNode = this.get(index);
    const prevNode = currentNode!.prev;
    const nextNode = currentNode!.next;

    prevNode!.next = nextNode;
    nextNode!.prev = prevNode;

    this.decrementLength();

    return currentNode;
  }

  private incrementLength() {
    this.length += 1;
  }

  private decrementLength() {
    this.length -= 1;
  }

  private isListEmpty() {
    return this.length === 0;
  }

  private doesListContainOnlyOne() {
    return this.length === 1;
  }
}
