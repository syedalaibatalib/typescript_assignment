/* QUESTION NO 16:
More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest
to the end of your list. • Print a new set of invitation messages, one for each person in
your list */


// THE GUEST LIST IS
let glist=[
    "SAIM",
    "LABIBA",
    "SUNAIL",
    "FARIA"

];
console.log("The guest list is:",glist);



//ADD NEW GUEST AT START OF THE ARRAY:
let nguest=glist.unshift("ALI");
console.log("\nThe new guest is whose in start of array is ALI\n",glist);




// ADD NEW FRIEND AT THE END OF THE ARRAY:
let n2guest=glist.push("ZAINA");
console.log("\n Guest whose add at end of the array is ZAINA\n",glist);


//ADD FRIEND AT THE MIDDLE OF ARRAY BY USING UPPEND()
//USE SPLICE METHOD TO ENTER NEW DATA ADD THE MIDDLE

let mguest=glist.splice(3,0,"ZAYYAN");
console.log("The guest who add in middle is 'ZAYYAN'\n",glist);


//the new invitation list is:
console.log("New list for invitation :");
for (let i=0; i<glist.length; i++){

console.log("Hello!", glist[i],"I'm very glad to see you at my home for dinner at 8 o'clock");
}