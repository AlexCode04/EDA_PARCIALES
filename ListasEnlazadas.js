class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Método para agregar un nodo al final de la lista
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Método para imprimir la lista
  print() {
    let node = this.head;
    while (node != null) {
      console.log(`Valor ${node.value} | Next: ${node.next?.value || null}`);
      node = node.next;
    }
  }

  // Método para fusionar dos listas y ordenarlas de menor a mayor
  static mergeAndSort(list1, list2) {
    const mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
      if (current1.value >= current2.value) {
        mergedList.append(current1.value);
        current1 = current1.next;
      } else {
        mergedList.append(current2.value);
        current2 = current2.next;
      }
    }

    // Si quedan elementos en list1
    while (current1 !== null) {
      mergedList.append(current1.value);
      current1 = current1.next;
    }

    // Si quedan elementos en list2
    while (current2 !== null) {
      mergedList.append(current2.value);
      current2 = current2.next;
    }

    return LinkedList.reverseList(mergedList);
  }

  // Método para invertir una lista enlaz
  
  static reverseList(list) {
    let prev = null;
    let current = list.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    list.head = prev;

    return list;
  }
}

// Ejemplo de uso:
const list1 = new LinkedList();
list1.append(11);
list1.append(7);
list1.append(1);

const list2 = new LinkedList();
list2.append(6);
list2.append(4);
list2.append(2);

console.log("Lista 1:");
list1.print();

console.log("Lista 2:");
list2.print();

const mergedList = LinkedList.mergeAndSort(list1, list2);
console.log("Lista fusionada y ordenada:");
mergedList.print();
