import CustomNode from "../utils/node";

/**
 * Singly Linked List
 * @class
 * @author Andrew Savelev <https://github.com/savelevcorr>
 * @version 0.0.1
 */
class SinglyLinkedList {
  head: null | CustomNode<any>;
  tail: null | CustomNode<any>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a value in the list.
   * <ol>
   *     <li>Create a new node using the value passed as an argument</li>
   *     <li>
   *         If there is no head property on the list. set the head and tail
   *         to be the newly created node
   *     </li>
   *     <li>
   *         Otherwise set the next property on the tail to be the new node
   *         and set the tail property on the list to be the newly created node
   *     </li>
   *     <li>Increment the length by 1</li>
   *  </ol>
   * @param {any} value - a peace of data
   */
  push(value: unknown) {
    const newNode = new CustomNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /**
   * Remove a node from the end of the Linked List
   * <ol>
   *     <li>If there are no nodes in the list, return undefined</li>
   *     <li>Otherwise, loop through the list until you reach the tail</li>
   *     <li>Set the next property of the 2nd to last node to be null</li>
   *     <li>Set the tail to be the 2nd to last node</li>
   *     <li>Decrement the length of the list by 1</li>
   *     <li>Return the value of the node removed</li>
   * </ol>
   */
  pop(): CustomNode<unknown> | unknown {
    let current: CustomNode<unknown> | null = this.head;
    let newTail = current;

    if (!this.length) {
      return undefined;
    }

    while (current!.next) {
      newTail = current;
      // @ts-ignore
      current = current!.next;
    }

    this.tail = newTail;
    this.tail!.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current!.value;
  }

  /**
   * <ol>
   *     <li>If there are no nodes, return undefined</li>
   *     <li>Store the current head property in a variable</li>
   *     <li>Set the current head property to be current's head next property</li>
   *     <li>Decrement the length by 1</li>
   *     <li>Return the value of the node removed</li>
   * </ol>
   */
  shift() {
    if (!this.head) {
      return undefined;
    }

    let head: CustomNode<any> | null = this!.head;
    this.head = head!.next as CustomNode<any>;

    this.length--;

    return head;
  }

  /**
   * Set a new node to be the new head of the list
   * <ol>
   *     <li>Create a new node using the value passed to the function</li>
   *     <li>If there is no head property on the list, set the head and tail to be the newly created node</li>
   *     <li>
   *         Otherwise set the newly created node's <b><i>next</i></b> property
   *         to be the current head property on the list
   *     </li>
   *     <li>Set the head property on the list to be that newly created node</li>
   *     <li>Increment the length property by 1</li>
   *     <li>Return the linked list</li>
   * </ol>
   * @since 1.0.0
   * @param value - a peace of any data
   */
  unshift(value: unknown): this {
    const newHead = new CustomNode(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;

      this.head = newHead;
    }

    this.length++;

    return this;
  }

  /**
   * Get an element by index
   * <ol>
   *     <li>
   *         If the index is less than zero or greater than
   *         or equal to the length of the list return <b><i>null</i></b>
   *     </li>
   *     <li>Loop through the list until you reach the index</li>
   *     <li>Return the node at that specific index</li>
   * </ol>
   * @since 1.0.0
   * @param {number} index
   */
  get(index: number): CustomNode<any> | null {
    let current: CustomNode<any> | null = this.head;
    let counter = 0;
    if (index < 0 || index >= this.length) {
      return null;
    }

    while (counter !== index) {
      current = current!.next;
      counter++;
    }

    return current;
  }

  /**
   * Changing the <b><i>value</i></b> of a node
   * based on it's position in the List;
   * <ol>
   *     <li>Use your <b><i>get</i></b> function to find the specific node</li>
   *     <li>If the node is not found, return false</li>
   *     <li>
   *         If the node is found, set the value of that node
   *         to be the value passed to the function and return true
   *     </li>
   * </ol>
   * @param {number} index
   * @param {any} value
   * @return {boolean}
   */
  set(index: number, value: unknown): boolean {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;
    return true;
  }

  /**
   * Adding a node to the Linked List at a <b><i>specific</i></b> position
   * <ol>
   *     <li>
   *         If the index is less than zero or greater than the length, return false
   *     </li>
   *     <li>
   *         If the index is the same as the length,
   *         <b><i>push</i></b> a new node to the end of the list
   *     </li>
   *     <li>
   *         If the index is 0, <b><i>unshift</i></b> a new node to the start of the list
   *     </li>
   *     <li>
   *         Otherwise, using the get method, access the node at the index - 1
   *     </li>
   *     <li>
   *         Set the next property on that node to be the new node
   *     </li>
   *     <li>
   *         Set the next property on the new node to be the previous next
   *     </li>
   *     <li>
   *         Increment the length
   *     </li>
   *     <li>
   *         Return true
   *     </li>
   * </ol>
   * @param index
   * @param value
   */
  insert(index: number, value: unknown): boolean {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else {
      const node = this.get(index - 1);
      const prevNext = node!.next;
      const newNode = new CustomNode(value);

      node!.next = newNode;
      newNode.next = prevNext;

      this.length++;

      return true;
    }
  }
}

export default SinglyLinkedList;
