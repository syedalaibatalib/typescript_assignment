/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any size with a different message.*/

function large_shirt(size:string, message:string): any{
    console.log(size,message);
}
console.log("the shirt is large:" ,large_shirt('XL',"I LoVe TypeScripT"));
console.log("\nthe shirt is medium:", large_shirt('L',  "Mind YouR\N     Own Bussiness"));

