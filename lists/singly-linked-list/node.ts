/**
 * It stores the peace of data - value
 * and a reference to the next node in the <b><i>next</i></b> field
 * @author Andrei Savelev <savelevcorr@gmail.com>
 */
class Node<T> {
  public next: Node<T> | null;
  public value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default Node;
