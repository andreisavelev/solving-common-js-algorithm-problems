interface INode<T> {
    value: T
    prev: TNode<T>
    next: TNode<T>
}

export type TNode<T> = INode<T> | null;

export default class Node implements INode<string> {
    value: string;
    prev: TNode<string>
    next: TNode<string>

    constructor(value: string) {
        this.value = value;
        this.prev = null
        this.next = null;
    }
}
