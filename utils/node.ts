class CustomNode<T> {
    public next: null | object = null;
    public value: T;

    constructor(value: T) {
        this.value = value;
    }
}

export default CustomNode;