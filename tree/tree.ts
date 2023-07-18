import type { TTreeNodeEntity, ITreeNode } from "../shared/node";
import { TreeNode } from "../shared/node";

interface ITree<T> {
  root: TTreeNodeEntity<T>;
  insert(value: T): undefined;
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

    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;

          return;
        } else {
          currentNode = currentNode.right;
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
        throw new Error("Value should be only a number");
      }
    }
  }

  find(value: number): TTreeNodeEntity<number> {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;

    if (currentNode.value === value) {
      return currentNode;
    }

    while (true) {
      if (currentNode === null) {
        return null;
      }

      if (currentNode.value === value) {
        return currentNode;
      }
      
      if (value > currentNode.value) {
        currentNode = currentNode.right as ITreeNode<number>;
      } else {
        currentNode = currentNode.left as ITreeNode<number>;
      }
    }
  }
}
