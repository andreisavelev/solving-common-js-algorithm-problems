import Queue from "../queue";

const getFulfilledQueue = (): [string[], Queue] => {
  const elements = ["first", "second", "third"];

  const queue = new Queue();

  elements.forEach((element) => {
    queue.push(element);
  });

  return [elements, queue];
};

describe("Queue", () => {
  describe("push", () => {
    it("should add an element at the end of the queue when it's empty", () => {
      const queue = new Queue();
      const expectedPushedValue = "expectedPushedValue";

      const result = queue.push(expectedPushedValue);

      expect(result).toBe(1);
      expect(queue.last?.value).toBe(expectedPushedValue);
      expect(queue.first?.value).toBe(expectedPushedValue);
      expect(queue.first?.next).toBe(null);
    });

    it("should add an element at the end of the queue when it's not empty", () => {
      const [elements, queue] = getFulfilledQueue();
      const [first] = elements;
      const fourth = "fourth";

      const result = queue.push(fourth);

      expect(result).toBe(elements.length + 1);
      expect(queue.first?.value).toBe(first);
      expect(queue.last?.value).toBe(fourth);
      expect(queue.last?.next).toBe(null);
    });
  });
});
