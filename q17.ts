/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.*/



//Start with your program from Exercise 16. Add a new line that prints a message saying
//that you can invite only two people for dinner
// THE GUEST LIST IS


let GLIST=[
    "SAIM",
    "LABIBA",
    "SUNAIL",
    "FARIA"

];
console.log("So SOrry guys! i can invite only 2 person for dinner"+GLIST);


/*• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.*/
for(let i=0; i<2;i++){
    console.log(GLIST.pop(),"SORRY YOU ARE NOT INVITED FOR TODAY DINNER PARTY");

}


/* Print a message to each of the two people still on your list, letting them know they’re
still invited.*/
for (let i=0;i<GLIST.length;i++){
    console.log(GLIST[i],"you are still invited for dinner");

}
/* Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.*/

GLIST.pop();
GLIST.pop();

console.log("the list of guest",GLIST);
