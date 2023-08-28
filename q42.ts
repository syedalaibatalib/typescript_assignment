/*Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified.
*/
let magicians:string[]=['magician1','magician2','magician3'];


function showmagician(magicians:string[]):any {
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i]);
    }
}
const make_great=(magicians:string[]):void=>{
    for(let i=0;i<magicians.length;i++){
      magicians[i]= "the great magician"+ magicians[i];  
    }
}


console.log("orignal list of magician\n");
showmagician(magicians);


console.log("\n new list of magicians\n");
make_great(magicians);
showmagician(magicians);




