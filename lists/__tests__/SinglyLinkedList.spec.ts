import SinglyLinkedList from "../SinglyLinkedList";
import CustomNode from "../../utils/node";

describe("SinglyLinkedList", () => {
  let list: SinglyLinkedList | null;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list!.push("Hello");
    list!.push("world");
  });
  afterEach(() => {
    list = null;
  });

  it("Should increment the length property", () => {
    expect(list!.length).toBe(2);
  });

  it("Should be able to add a new value into the list", () => {
    expect(list!.head?.value).toBe("Hello");
    expect(list!.tail?.value).toBe("world");
  });

  it("Should be able to pop the node form the list", () => {
    let popped = list!.pop();

    expect(popped).toBe("world");
    expect(list?.length).toBe(1);
  });

  it("Should remove a head", () => {
    list!.shift();

    expect(list!.head?.value).toBe("world");
  });

  it("Should set a new node to be the head of the list", () => {
    const NEW_NODE_VALUE = "New node";

    list!.unshift(NEW_NODE_VALUE);

    expect(list?.head?.value).toBe(NEW_NODE_VALUE);
  });
});
