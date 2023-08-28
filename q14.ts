//QUESTION NO 14
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would
you invite? Make a list that includes at least three people you’d like to invite to
dinner. Then use your list to print a message to each person, inviting them to
dinner*/

let guestlist=["zara","aalia","shanu"];
for(let i=0; i<guestlist.length; i++){
    console.log("Guestname=",guestlist[i]);

}

for(let x=0 ; x<guestlist.length; x++){
    console.log(guestlist[x],"Please come and join us on dinner at 8 o'clock");
}
