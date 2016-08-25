var LinkedList = require('./linkedList');
var linkedList = new LinkedList();


// console.log('¿Tiene elementos?', linkedList.hasElements());
linkedList.add(89);
linkedList.add(15);
linkedList.add(88);
linkedList.add(99);
linkedList.add(37);
linkedList.add(7);
linkedList.add(72);
linkedList.add(12);
// console.log('¿Tiene elementos?', linkedList.hasElements());
// console.log('Tamaño de la lista', linkedList.size());
// console.log('Imprime los elementos', linkedList.toString());
// console.log('Obten la posición', linkedList.indexOf(99));
// linkedList.remove(89);
// console.log('Nuevo tamaño de la lista', linkedList.size());
linkedList.remove(88);
console.log('Imprime los elementos', linkedList.toString());
// console.log('Insertamos el 100 en la posición 1', linkedList.insert(100, 2));
// console.log('Imprime los elementos', linkedList.toString());

console.log(linkedList.headNode);
