import { Stack } from "../stack";

describe("Stack", () => {
  it("should create a stack with first & last set to null and length set to 0", () => {
    const stack = new Stack();

    expect(stack.first).toEqual(null);
    expect(stack.last).toBe(null);
    expect(stack.length).toBe(0);
  });

  describe("push", () => {
    it("should add a value at the start of the stack if there is no any values", () => {
      const stack = new Stack();
      const value = "value";

      stack.push(value);

      expect(stack.first?.value).toBe(value);
      expect(stack.last?.value).toBe(value);
      expect(stack.length).toBe(1);
    });

    it('should add a value at the start of the stack if there is some values', () => {
        const stack = new Stack();
        const initialFirstValue = 'initialFirstValue';
        const expectedValue = 'expected value';
        stack.push(initialFirstValue);
        const initialLength = stack.length;

        stack.push(expectedValue);

        expect(stack.first?.value).toBe(expectedValue);
        expect(stack.first?.next?.value).toBe(initialFirstValue);
        expect(stack.first?.next).toBe(stack.last);
        expect(stack.last?.value).toBe(initialFirstValue);
        expect(stack.last?.next).toBe(null);
        expect(stack.length).toBe(initialLength + 1);
    })
  });

  describe('pop', () => {
    it('should return a null if there is no any value', () => {
        const stack = new Stack();
        const result = stack.pop();

        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
        expect(stack.length).toBe(0);
        expect(result).toBe(null);
    });

    it('should return first removed node for the stack with only one node', () => {
        const stack = new Stack();
        const initialFirstValue = 'initialFirstValue';
        stack.push(initialFirstValue);

        const initialLength = stack.length;
        const result = stack.pop();

        expect(result?.value).toBe(initialFirstValue);
        expect(stack.length).toBe(initialLength - 1);
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
    });

    it('should remove first node in the stack with nodes more then one', () => {
        const stack = new Stack();
        const initialFirstValue = 'initialFirstValue';
        const anotherFirstValue = 'anotherFirstValue';
        stack.push(initialFirstValue);
        stack.push(anotherFirstValue);
        const initialLength = stack.length;

        const result = stack.pop();

        expect(result?.value).toBe(anotherFirstValue);
        expect(stack.first?.value).toBe(initialFirstValue);
        expect(stack.length).toBe(initialLength - 1);
        expect(stack.last).not.toBe(null);
    })
  });
});