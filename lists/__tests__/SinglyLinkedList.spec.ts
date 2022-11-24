import SinglyLinkedList from "../SinglyLinkedList";

describe("SinglyLinkedList", () => {
  let list: SinglyLinkedList | null;

  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push("Hello");
    list.push("world");
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

    expect(popped?.value).toBe("world");
    expect(list?.length).toBe(1);
  });

  it("Should remove a head", () => {
    let result = list!.shift();

    expect(result?.value).toBe("Hello");
  });

  it("Should set a new node to be the head of the list", () => {
    const NEW_NODE_VALUE = "New node";

    list!.unshift(NEW_NODE_VALUE);

    expect(list?.head?.value).toBe(NEW_NODE_VALUE);
  });

  describe("-> get", () => {
    it("should get an element by index", () => {
      const foundNode = list!.get(1);

      expect(foundNode!.value).toBe("world");
    });

    it("should return null if index greater than length", () => {
      const foundNode = list!.get(3);

      expect(foundNode).toBe(null);
    });

    it("should return null if index equal to length", () => {
      const foundNode = list!.get(2);

      expect(foundNode).toBe(null);
    });

    it("should return null if index less than 0", () => {
      const foundNode = list!.get(-1);

      expect(foundNode).toBe(null);
    });
  });

  describe("-> set", () => {
    it("Should return false if the node was not updated", () => {
      const NEW_VALUE = "Epam!";
      const result = list!.set(2, NEW_VALUE);

      expect(result).toBe(false);
    });

    it("Should return true if the node was found", () => {
      const NEW_VALUE = "Epam!";
      const result = list!.set(1, NEW_VALUE);

      expect(result).toBe(true);
    });

    it("Should update the node according to the value passed to the function", () => {
      const NEW_VALUE = "Epam!";
      list?.set(1, NEW_VALUE);

      expect(list!.get(1)?.value).toBe(NEW_VALUE);
    });
  });

  describe("-> insert", () => {
    it("Should return false if the index is less than zero", () => {
      let result = list!.insert(-1, "value");

      expect(result).toBe(false);
    });

    it("Should return false if the index is greater than the length", () => {
      let result = list!.insert(3, "value");

      expect(result).toBe(false);
    });

    it("Should return true if the index is equal to 0", () => {
      let result = list!.insert(0, "value");

      expect(result).toBe(true);
    });

    it("Should return true if the index is equal to the length", () => {
      let result = list!.insert(0, "value");

      expect(result).toBe(true);
    });

    it("Should return true if the index is greater 0 and less than the length", () => {
      let result = list!.insert(1, "value");

      expect(result).toBe(true);
    });

    it("Should insert a node at the start of the list", () => {
      const NEW_START_VALUE = "NEW_START_VALUE";

      list!.insert(0, NEW_START_VALUE);

      expect(list!.get(0)?.value).toBe(NEW_START_VALUE);
    });

    it("Should push a node at the end of the list", () => {
      const NEW_START_VALUE = "NEW_START_VALUE";

      list!.insert(2, NEW_START_VALUE);

      expect(list!.get(2)?.value).toBe(NEW_START_VALUE);
    });

    it("Should insert a new node at the specific index", () => {
      const NEW_START_VALUE = "NEW_START_VALUE";

      list!.insert(1, NEW_START_VALUE);

      expect(list!.get(1)?.value).toBe(NEW_START_VALUE);
    });

    it("Should increment the length when inserting was complete", () => {
      const NEW_START_VALUE = "NEW_START_VALUE";
      const PREV_LENGTH = list!.length;

      list!.insert(1, NEW_START_VALUE);

      expect(list?.length).toBe(PREV_LENGTH + 1);
    });
  });

  // describe("-> remove", () => {
  //   it("Should return null if the index is less than zero", () => {
  //     let result = list!.remove(-1);

  //     expect(result).toBeNull();
  //   });
  // });
});
