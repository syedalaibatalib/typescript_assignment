//QUESTION NO 15
/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/


// GUEST LIST WHO INVITE FOR DINNER
let Glist=["zara","aalia","shanu"];
console.log("Guestlist:",Glist );

//Shift (is used to remove the first name of thr array)
//THE GUEST WHOSE NOT COME FOR DINNER
let guestnotcome=Glist.shift();

console.log("\nThe guest whose not come is", guestnotcome);


//ADD NEW GUEST
//by using PUSH we add friend at the end of array

let newguest=Glist.push("Maria");
console.log("\nMy new guest is 'Maria");
console.log("\nThe new guest is:",Glist);

//NEW INVITATION FOR DINNER:

console.log("New list for invitation :");
for (let i=0; i<Glist.length; i++){

console.log("Hello!", Glist[i],"I'm very glad to see you at my home for dinner at 8 o'clock");
}








