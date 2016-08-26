function LinkedList() {

    var listSize = 0;
    var headNode = null;

    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var headNode = function () {
        this.first = null;
        this.last = null;
    }

    headNode = new headNode();


    this.add = add;
    this.toString = toString;
    this.headNode = headNode;
    this.remove = remove;
    this.indexOf = indexOf;
    this.getSize = getSize;

    // this.insert = insert;
    // this.removeFrom = removeFrom;
    // this.hasElements = hasElements;
    // this.size = size;
    // this.headNode = headNode;
    function getSize() {
      return listSize;
    }

    function add(element) {
        var node = new Node(element);
        var currentNode;
        if (!hasElements()) {
            headNode.first = node;
            headNode.last = node;
        } else {
            currentNode = headNode.last;
            currentNode.next = node;
            headNode.last = node;
         }
        listSize++;
    }



    function remove(element) {
        var nodeElement = getNodeFromElement(element);
        if (headNode.first == nodeElement) {
            headNode.first = nodeElement.next;
            return element;
        }

        currentNode = headNode.first;

        while (currentNode.next != nodeElement) {
            currentNode = currentNode.next;
        }

        currentNode.next = nodeElement.next;

        if (headNode.last == nodeElement) {
            currentNode.next = null;
            headNode.last = currentNode;
        }

        return nodeElement;
    }

    // function removeFromIndex(index) {

    //     if (index < 0 || index>listSize-1) {
    //         return -1;
    //     }

    //     currentNode = headNode.first;

    //     if (index == 0) {
    //         headNode.first = currentNode.next;
    //         return currentNode;
    //     }
    //     // getElement(index);
    //     while (currentNode.next != 1) {
    //         currentNode = currentNode.next;
    //     }

    //     if (index == listSize-1) {
    //         headNode.last = currentNode;
    //     }

    //     [1,5,3]


    // }

    function getNodeFromIndex(index) {
        currentNode = headNode.first;
        for (var i = 0; i <= index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;

    }

    function getNodeFromElement(element) {
        currentNode = headNode.first;
        var counter = 0;
        while(currentNode.element != element){
            if (counter >= listSize) return null;
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }



    function toString() {
        var currentNode = headNode.first;
        var str = '[';

        while (currentNode) {
            str += currentNode.element + ',';
            currentNode = currentNode.next;
        }
        str = str.substring(0,str.length-1);
        str+=']'

        return str;
    }

    function hasElements() {
        return listSize>0;
    }

    function indexOf(element) {
        var currentNode = headNode.first;
        var index = 0;

        while (currentNode) {
            if (currentNode.element === element) {
                return index;
            }

            index++;
            currentNode = currentNode.next;
        }

        return -1;
    }

}

//     function insert(element, pos) {
//         // Verificamos que la posición exista
//         if (pos > -1 && pos < listSize) {
//             var node = new Node(element);
//             var currentNode = headNode;
//             var previousNode;
//             var index = 0;
//             var auxHeadNode = headNode;
//             // Primer elemento
//             if (pos === 0) {
//                 node.next = currentNode;
//                 headNode = node;
//                 headNode.last = auxHeadNode.last;
//             } else {
//                 while (index++ < pos) {
//                     previousNode = currentNode;
//                     currentNode = currentNode.next;
//                 }

//                 if (pos==listSize-1) {
//                     headNode.last = currentNode;
//                 }

//                 node.next = currentNode;
//                 previousNode.next = node;
//             }

//             listSize++;

//             return true;
//         }

//         return false;
//     }

//     function remove(element) {
//         var index = this.indexOf(element);

//         return this.removeFrom(index-1);
//     }

//     function removeFrom(pos) {

//         // Verificamos que la posición exista
//         if (pos > -1 && pos < listSize) {
//             var currentNode = headNode;
//             var previousNode;
//             var index = 0;
//             var auxHeadNode = headNode;

//             // Si pos 0, entonces eliminaremos el primer elemento.
//             if (pos === 0) {
//                 headNode = currentNode.next;
//                 headNode.last = auxHeadNode.last;
//             } else {
//                 while (index++ < pos) {
//                     // Mandamos el nodo actual a previous
//                     previousNode = currentNode;

//                     // Ahora el actual será el next
//                     currentNode = currentNode.next;
//                 }
//                 console.log(listSize);
//                 console.log(pos);
//                 console.log('=========');
//                 if (pos==listSize) {
//                     headNode.last = currentNode;
//                 }

//                 // Enlazamos el next de previous con el next del nodo actual (lo saltamos para eliminarlo)
//                 previousNode.next = currentNode.next;
//             }

//             // Restamos el elemento eliminado de la lista
//             listSize--;

//             // Retornamos el valor del elemento eliminado
//             return currentNode.element;
//         }

//         // Si la posición esta fuera de rangos regresamos null
//         return null;
//     }

//     function indexOf(element) {
//         var currentNode = headNode;
//         var index = 0;

//         while (currentNode) {
//             if (currentNode.element === element) {
//                 return index;
//             }

//             index++;
//             currentNode = currentNode.next;
//         }

//         return -1;
//     }

//     function hasElements() {
//         return listSize > 0;
//     }

//     function size() {
//         return listSize;
//     }

//     function toString() {
//         var currentNode = headNode;
//         var str = '|';

//         while (currentNode) {
//             str += currentNode.element + '|';
//             currentNode = currentNode.next;
//         }

//         return str;
//     }
// }

 module.exports =(LinkedList);
//var linkedList = new LinkedList();
