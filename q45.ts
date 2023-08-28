/*5. Cars: Write a function that stores information about a car in a Object. The
function should always receive a manufacturer and a model name. It should then
accept an arbitrary number of keyword arguments. Call the function with the
required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information
was stored correctly.*/


function cars(manufacturer:string,model:number,colors?:string,seat?:number): any{
    let car:any={
        manufacturer:manufacturer,
        model:model
    }
    if (colors!== undefined && seat!== undefined){
        car.color=colors;
        car.seats=seat;
    }
        return car;
    

}

let car22=(cars("dubai",2022,"blue",4));
let car23=(cars("london",2020));
console.log(car23);
console.log(car22);

