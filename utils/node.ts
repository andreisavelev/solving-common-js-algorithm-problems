/**
 * @class
 * It stores the peace of data - value
 * and a reference to the next node <b><i>next</i></b>
 * @author Andrew Savelev <savelevcorr@gmail.com>
 * @version 1.0.0
 */
class CustomNode<T> {
  public next: CustomNode<any> | null = null;
  public value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default CustomNode;
