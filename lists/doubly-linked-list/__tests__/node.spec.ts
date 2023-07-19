import Node from "../node";

describe("Node", () => {
  it("should create node as an instance of Node class", () => {
    const nodeValue = "Test";
    const node = new Node(nodeValue);

    expect(node.value).toBe(nodeValue);
    expect(node.prev).toBe(null);
    expect(node.next).toBe(null);
  });
});
