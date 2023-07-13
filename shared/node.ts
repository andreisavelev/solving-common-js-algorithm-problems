/**
 * It stores the peace of data - value
 * and a reference to the next node in the <b><i>next</i></b> field
 * @author Andrei Savelev <savelevcorr@outlook.com>
 */
export type NodeEntity = INode<unknown> | null;

interface IBaseNode<T> {
  value: T;
}

export interface INode<T> {
  next: NodeEntity;
  value: T;
}

export type TTreeNodeEntity<T> = ITreeNode<T> | null;

export interface ITreeNode<T> extends IBaseNode<T> {
  left: TTreeNodeEntity<T>;
  right: TTreeNodeEntity<T>;
}

export class TreeNode implements ITreeNode<unknown> {
  left: TTreeNodeEntity<unknown>;
  right: TTreeNodeEntity<unknown>;
  value: unknown;

  constructor(value: unknown) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
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
