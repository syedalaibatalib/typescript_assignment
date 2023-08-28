/*Checking Usernames: Do the following to create a program that simulates how
websites ensure that everyone has a unique username.*/

//Make a list of five or more usernames called current_users
let Current_user=["ali","sana","rohan","zeeshan","mozma"]


//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let New_user=["ali","labiba","hamiz","aliyan","sana"]
for(let i=0; i<1; i++){
//let i=Current_user;
 for(let j=0; j<New_user.length;j++){
    if (New_user[j]== Current_user[i]){
        console.log(`${New_user[j]},should not bi accepted `);
    }
    else{
        console.log(`${New_user[j]}, available for new user`);
    }



  }
}

