/*An object is a composite value: it aggregates multiple values (primitive
values or other objects) and allows you to store and retrieve those
values by name. An object is an unordered collection of properties,
each of which has a name and a value.*/


//OBJECT LITERALS

let empty = {};   // An object with no properties

let point = {x:0, y:4};    //Two numeric properties

let p2 = {x:point.x, y:point.y};     // More complex value

let book = {
    title: 'JavaScript',
    subtitle: 'The Definitive Guide',
    to: 'All audiences',
    author: {
        firstname: 'David',
        surname: 'Flanagan'
    }
};


delete book.author.surname;


for(let [a] in book){
    console.log(a);
}

console.log(point.y);
console.log(p2.y);
console.log(book.title);
console.log(book.author.firstname);



// CREATING OBJECTS WITH NEW


/*The new operator creates and initializes a new object. The new
keyword must be followed by a function invocation. A function used in
this way is called a constructor and serves to initialize a newly created
object. JavaScript includes constructors for its built-in types.*/


let o = new Object();

let a = new Array();

let d = new Date();

let m = new Map();


o.name = 'Gilbert';

console.log(o);

a = ['JavaScript', 'React'];

console.log(a)
console.log(a[0]);

