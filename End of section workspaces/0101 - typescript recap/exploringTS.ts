export {} //this is just needed as we are exploring typescript code.

const myName : string = "Matt";
let yourName;
yourName = "James";
yourName = "Sally";

type Customer = {name : string, age : number, email : string }

class User {
    userName : string = "Matt";
    readonly version : number = 1.0;
}

//object created from a data type
const c1 : Customer = {name : "James", age: 16, email : "james@nowhere.com"};

//object created from a class
const u1 : User = new User();
u1.userName="Anna";

function sayHello1 (firstname : string,surname : string) : boolean {
    alert('Hello ' + firstname + ' ' + surname);
    return true;
}

const sayHello2 = (firstname : string, surname : string) => {
    alert('Hello ' + firstname + ' ' + surname);
}

const sayHello3 = (firstname : string, surname : string) =>  alert('Hello ' + firstname + ' ' + surname);

type sayHelloProps = {firstname : string, surname : string };
const sayHello4 = (props : sayHelloProps) => alert('Hello ' + props.firstname + ' ' + props.surname);
const sayHello5 = ({firstname, surname} : sayHelloProps) => alert('Hello ' + firstname + ' ' + surname);

const greeting = (firstname : string, surname : string ) : string => 'Hello ' + firstname + ' ' + surname;


class UserProcessor {
    customer : Customer;

    constructor(customer : Customer) {
        this.customer = customer;

    }

    activateUser : any = (user : User) => {
        console.log(`user ${user.userName} has been activated`);
    }
    
}

const names = ["Simon", "Diane", "Colin", "Amanda", "Dion", "David", "Gertrude"];
for (const name of names) {
    console.log(name);
}

for (const key in names) {
    console.log(key);
}

