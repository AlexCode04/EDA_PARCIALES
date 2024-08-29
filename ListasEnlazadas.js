class ListaEnlazada {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}
  
  function OrdenarLista(list1, list2) {
    let mergedHead = null;

    function insertarCabeza(node) {
      node.next = mergedHead;
      mergedHead = node;
    }
  
    while (list1 !== null && list2 !== null) {
      if (list1.value >= list2.value) {
        let next = list1.next;
        insertarCabeza(list1);
        list1 = next;
      } else {
        let next = list2.next;
        insertarCabeza(list2);
        list2 = next;
      }
    }
  
    while (list1 !== null) {
      let next = list1.next;
      insertarCabeza(list1);
      list1 = next;
    }
  
    while (list2 !== null) {
      let next = list2.next;
      insertarCabeza(list2);
      list2 = next;
    }
  
    return mergedHead;
  }

  function printList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  let list1 = new ListaEnlazada(5, new ListaEnlazada(3, new ListaEnlazada(1)));
  let list2 = new ListaEnlazada(6, new ListaEnlazada(4, new ListaEnlazada(2)));
  
  let listaOrdenada = OrdenarLista(list1, list2);
  printList(listaOrdenada);
  