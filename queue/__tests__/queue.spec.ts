import Queue from "../queue";

const getFulfilledQueue = (first?: string): [string[], Queue] => {
  const elements = first ? [first] : ["first", "second", "third"];
  const queue = new Queue();

  elements.forEach((element) => {
    queue.enqueue(element);
  });

  return [elements, queue];
};

describe("Queue", () => {
  describe("enqueue", () => {
    it("should add an element at the end of the queue when it's empty", () => {
      const queue = new Queue();
      const expectedPushedValue = "expectedPushedValue";

      const result = queue.enqueue(expectedPushedValue);

      expect(result).toBe(1);
      expect(queue.last?.value).toBe(expectedPushedValue);
      expect(queue.first?.value).toBe(expectedPushedValue);
      expect(queue.first?.next).toBe(null);
    });

    it("should add an element at the end of the queue when it's not empty", () => {
      const [elements, queue] = getFulfilledQueue();
      const [first] = elements;
      const fourth = "fourth";

      const result = queue.enqueue(fourth);

      expect(result).toBe(elements.length + 1);
      expect(queue.first?.value).toBe(first);
      expect(queue.last?.value).toBe(fourth);
      expect(queue.last?.next).toBe(null);
    });
  });

  describe("dequeue", () => {
    it("should return null for empty queue", () => {
      const queue = new Queue();

      const result = queue.dequeue();

      expect(result).toBe(null);
      expect(queue.first).toBe(null);
      expect(queue.last).toBe(null);
      expect(queue.length).toBe(0);
    });

    it("should remove only element from the queue", () => {
      const expectedValue = 'value'
      const [, queue] = getFulfilledQueue(expectedValue);

      const result = queue.dequeue();

      expect(result?.value).toBe(expectedValue);
      expect(queue.length).toBe(0);
      expect(queue.first).toBe(null);
      expect(queue.last).toBe(null);
    });
  });
});
