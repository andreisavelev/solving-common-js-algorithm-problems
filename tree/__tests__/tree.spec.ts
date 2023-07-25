import { Tree } from "../tree";

describe("Tree", () => {
  describe("insert", () => {
    it("should insert a value into an empty tree", () => {
      let tree = new Tree();

      tree.insert(10);

      expect(tree.root!.value).toBe(10);
    });

    it("should insert a value smaller than the root node", () => {
      let tree = new Tree();
      tree.insert(10);

      tree.insert(5);

      expect(tree.root!.left!.value).toBe(5);
    });

    it("should insert a value larger than the root node", () => {
      let tree = new Tree();
      tree.insert(10);

      tree.insert(15);

      expect(tree.root?.right?.value).toBe(15);
    });

    it("should ignore inserting a duplicate value", () => {
      let tree = new Tree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      tree.insert(10);

      expect(tree.root?.value).toBe(10);
      expect(tree.root?.left?.value).toBe(5);
      expect(tree.root?.right?.value).toBe(15);
    });

    it("should throw an error when inserting an invalid value", () => {
      let tree = new Tree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);

      expect(() => {
        // @ts-ignore
        tree.insert("hello");
      }).toThrow(Error);
    });
  });

  describe("find", () => {
    it("should return null if the tree is empty", () => {
      const tree = new Tree();

      expect(tree.find(1)).toBeNull();
    });

    it("should return null if the value is not found", () => {
      const tree = new Tree();

      tree.insert(1);

      expect(tree.find(2)).toBeNull();
    });

    it("should return the node if the value is found", () => {
      const tree = new Tree();

      tree.insert(1);

      expect(tree.find(1)).toEqual({ value: 1, left: null, right: null });
    });

    it("should return the root node if the value is equal to the root value", () => {
      const tree = new Tree();

      tree.insert(1);

      expect(tree.find(1)).toEqual({ value: 1, left: null, right: null });
    });

    it("should return the left child node if the value is less than the root value", () => {
      const tree = new Tree();

      tree.insert(2);
      tree.insert(1);

      expect(tree.find(1)).toEqual({ value: 1, left: null, right: null });
    });

    it("should return the right child node if the value is greater than the root value", () => {
      const tree = new Tree();

      tree.insert(1);
      tree.insert(2);

      expect(tree.find(2)).toEqual({ value: 2, left: null, right: null });
    });

    it("should return the correct node for a complex tree", () => {
      const tree = new Tree();

      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);

      expect(tree.find(6)).toEqual({ value: 6, left: null, right: null });
    });

    it("should return null if the value is not a number", () => {
      const tree = new Tree();

      // @ts-ignore
      expect(tree.find(null)).toBeNull();
    });
  });

  describe("Breadth First Search", () => {
    it("should return an empty array when there is no root", () => {
      const tree = new Tree();

      expect(tree.bfs()).toEqual([]);
    });

    it("should return the root node if there is a root", () => {
      const tree = new Tree();

      tree.insert(1);
      const result = tree.bfs();
      expect(result[0]?.value).toEqual(1);
    });

    it("should return all nodes from the tree", () => {
      const tree = new Tree();
      const values = [1, 2, 3, 4, 5, 6];

      values.forEach((value) => {
        tree.insert(value);
      });

      const result = tree.bfs();

      result.forEach((node, index) => {
        expect(node?.value).toBe(values[index]);
      });
    });
  });

  describe("dfs pre-order", () => {
    it("should return the correct order", () => {
      const tree = new Tree();
      const values = [10, 6, 15, 3, 8, 20];
      const expected = [10, 6, 3, 8, 15, 20];

      values.forEach((value) => {
        tree.insert(value);
      });

      const result = tree.dfsPreOrder();

      result.forEach((node, index) => {
        expect(node?.value).toEqual(expected[index]);
      });
    });
  });

  describe("dfs post-order", () => {
    it("should return the correct order", () => {
      const tree = new Tree();
      const values = [10, 6, 15, 3, 8, 20];
      const expected = [3, 8, 6, 20, 15, 10];

      values.forEach((value) => {
        tree.insert(value);
      });

      const result = tree.dfsPostOrder();

      result.forEach((node, index) => {
        expect(node?.value).toEqual(expected[index]);
      });
    });
  });
});
