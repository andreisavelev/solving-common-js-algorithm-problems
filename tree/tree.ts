import { TreeNode, type TTreeNodeEntity } from "../shared/node";

interface ITree<T> {
  root: TTreeNodeEntity<T>;
  insert(value: T): undefined
}

export class Tree implements ITree<number> {
  root: TTreeNodeEntity<number>;

  constructor() {
    this.root = null;
  }

  insert(value: number): undefined {
    const node = new TreeNode(value) as TTreeNodeEntity<number>;

    if (this.root === null) {
      this.root = node;

      return;
    }

    let currentNode = this.root;

    while(true) {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          
          return;
        } else {
          currentNode = currentNode.right
        }
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;

          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value === currentNode.value) {
        return;
      } else {
        throw new Error('Value should be only a number');
      }
    }
  }
}
