// FOR/OF WITH SET AND MAP

/* THE BUILD-IN ES6 Set adn Map clases are iterable. When you
iterate a Set with for/of, the loop body runs once for each element of the set.
You could use code like this to print the unique words in a string of
text:*/

let text = "Na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];

for (let word of wordSet){
    unique.push(word);
}

console.log(unique);


/*Maps are an interesting case because the iterator for a Map object does
not iterate the Map keys, or the Map values, but key/value pairs. Each
time through the iteration, the iterator returns an array whose first
element is a key and whose second element is the corresponding value.
Given a Map m, you could iterate and destructure its key/value pairs
like this:
*/

let m = new Map([[1, 'one']]);

for(let [key, value] of m){
    console.log('KEY: ' + key);
    console.log('VALUE: ' + value);
}

// ASYNCHRONOUS ITERATION WITH FOR/AWAIT

/*ES2018 introduces a new kind of iterator, known as an asynchronous
iterator, and a variant on the for/of loop, known as the
for/await loop that works with asynchronous iterators.
You’ll need to read Chapters 12 and 13 in order to understand the
for/await loop, but here is how it looks in code:
*/

async function printStream(stream){
    for await (let chunk of stream){
        
        console.log(chunk);
    }
}

printStream('HELLO');

let spell = async (myWord) => {
    for await (let a of myWord){
        console.log(a);
    }
}

spell('GILBERT');
