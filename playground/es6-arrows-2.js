/**
 * Created by root on 10/8/17.
 */

const add = (a , b) => {
    return a+b;
};

console.log(add(55, 1));

const user = {
    name : 'Andrew',
    cities : ['New York' , 'Philadelphia', 'Blue'],
    printPlacesLived(){
        return this.cities.map((city) => {
            return this.name + " has lived in " + city;
        });
    }
};

console.log(user.printPlacesLived());