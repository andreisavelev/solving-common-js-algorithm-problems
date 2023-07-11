import type { NodeEntity } from "../shared/node";
import Node from "../shared/node";

interface IStack {
  first: NodeEntity;
  last: NodeEntity;
  length: number;

  push(value: unknown): number;

  pop(): NodeEntity
}

export class Stack implements IStack {
  first: NodeEntity;
  last: NodeEntity;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value: unknown) {
    const node = new Node(value);

    if(this.length === 0) {
        this.first = node;
        this.last = node;
        this.length += 1;

        return this.length;
    }

    const currentFirstNode = this.first;
    this.first = node;
    this.first.next = currentFirstNode;
    this.length += 1;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
        return null;
    }

    if (this.length === 1) {
        this.last = null;
    }

    const currentFirst = this.first;
    this.first = currentFirst!.next;
    this.length -= 1;

    return currentFirst;
  }
}