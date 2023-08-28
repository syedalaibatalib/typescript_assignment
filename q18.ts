/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let places=['DEOSAI NATIONAL PARK','KAGAN VALLEY','SERI PAYE','ABTTABAD'];
//Print your array in its original order.

{console.log(places);

// Print your array in alphabetical order without modifying the actual list.

let sortplaces=[...places].sort();
console.log("\nthe array in sorted manner",sortplaces);
}
//• Show that your array is still in its original order by printing it.

console.log("\nthe orignal array",places);


//Print your array in reverse alphabetical order without changing the order of the
//original list.
let reversedorder=[...places].sort().reverse();
console.log("\nthe array in reverse order",reversedorder);

// Show that your array is still in its original order by printing it again.
console.log("\n after reversed the array is still in orignal order",places);

// Reverse the order of your list. Print the array to show that its order has changed
places=places.reverse();
console.log("\n the reverse of orignal array",places);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
places=places.reverse();
console.log("\norignal order(again)",places);

/* Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.*/

places=places.sort();
console.log("\n the array in sorted form",places);


/*Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.*/
places=places.reverse();
console.log("\nthe reverse alphabatical order",places);






console.log("\n the array in orignal order");
const newplaces= places.concat().reverse();
console.log(newplaces);










