import type { TTreeNodeEntity } from "../shared/node";

interface ITree {
  root: TTreeNodeEntity<unknown>;
}

export class Tree implements ITree {
  root: TTreeNodeEntity<unknown>;

  constructor() {
    this.root = null;
  }
}
