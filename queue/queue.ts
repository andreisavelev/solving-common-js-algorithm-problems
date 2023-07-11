import type { NodeEntity } from "../shared/node";
import type { Structure } from "../shared/types";
import Node from "../shared/node";

class Queue implements Structure {
  first: NodeEntity;
  last: NodeEntity;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: unknown): number {
    const node = new Node(value);

    if (this.length === 0) {
      this.first = node;
      this.last = node;
      this.length += 1;

      return this.length;
    }

    this.last!.next = node;
    this.last = node;
    this.length += 1;

    return this.length;
  }

  dequeue(): NodeEntity {
    if (this.length === 0) {
      return null;
    }

    const firstNode = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = firstNode!.next;
    this.length -= 1;

    return firstNode;
  }
}

export default Queue;
