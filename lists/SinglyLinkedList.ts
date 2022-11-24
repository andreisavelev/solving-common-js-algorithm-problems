import Node from '../utils/node';

type NodeType = Node<string> | null

interface ISinglyLinkedList {
  head: NodeType
  tail: NodeType
  length: number

  push(value: unknown): ISinglyLinkedList
  pop(): NodeType | undefined
  shift(): NodeType | undefined
}

class SinglyLinkedList implements ISinglyLinkedList {
  head: NodeType;
  tail: NodeType;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: string) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail!.next = node;
      this.tail = node;
      this.incrementListLength();
    }

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    if (this.length === 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;

      return current;
    }

    while (current?.next) {
      newTail = current;
      current = current.next
    }

    this.tail = newTail;
    this.tail!.next = null
    this.decrementListLength();

    return current
  }

  shift() {
    if (this.length) {
      const currentHead = this.head;

      this.head = currentHead!.next;
      this.decrementListLength();

      return currentHead;
    }

    if (this.length === 0) {
      this.tail = null;
    }

    return undefined;
  }

  unshift(value: string) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.incrementListLength();
    return this;
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

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current?.next as NodeType | null;
      counter += 1;
    }

    return current;
  }

  set(index: number, value: string): boolean {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;
    return true;
  }

  insert(index: number, value: string):boolean {
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

    const node = this.get(index - 1);
    const newNode = new Node(value);
    const nodeNext = node!.next;

    node!.next = newNode;
    newNode.next = nodeNext;
    this.incrementListLength();

    return true;
  }

  private incrementListLength() {
    this.length += 1;
  }

  private decrementListLength() {
    this.length -= 1;
  }
}

export default SinglyLinkedList;
