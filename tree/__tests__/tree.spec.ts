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
});
