/**
 * It stores the peace of data - value
 * and a reference to the next node in the <b><i>next</i></b> field
 * @author Andrei Savelev <savelevcorr@outlook.com>
 */

export type NodeEntity = INode<unknown> | null;

export interface INode<T> {
  next: NodeEntity;
  value: T;
}

class Node implements INode<unknown> {
  public next: NodeEntity;
  public value: unknown;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

export default Node;