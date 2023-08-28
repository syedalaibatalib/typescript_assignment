/* Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name*/

let magician:string[]=['magicain1','magician2','magician3'];

function Make_great(magician:string[]):void{
    for(let i=0;i<magician.length;i++){
        console.log(magician[i]);

    }
}

const make_magician=(magician1:string[])=>{
    for(let i=0;i<magician1.length;i++){
        magician1[i]="the great"+magician1[i];
        console.log(magician1[i]);

    }

    return magician1;
}


console.log("the orignal magician\n");
Make_great(magician);

console.log("the great magician\n");
make_magician(magician);

console.log("after changes\n");


Make_great(magician);


