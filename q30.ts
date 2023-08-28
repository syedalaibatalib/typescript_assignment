/*admin'. Imagine you are writing code that will print a greeting to each user after
they log in to a website. Loop through the array, and print a greeting to each
user*/
let username = [
    "herry",
    " barbie",
    "admin",
    "elip"
];
for (let i = 0; i < username.length; i++) {
    if (i == 2) {
        console.log(`Hello ${username[2]} would you like to see a status report.`);//print admin invitation
    }
    else {
        console.log("hello!",username[i],"thanking for login");
    }
};