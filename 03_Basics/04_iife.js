// Immediately Invoked Function Expressions (IIFE)


(function Chai() {
    console.log(`DB CONNECTED`)
})();

//(Here we write definition)()

// (function aurCode() {
    // name iife 
//     console.log(`DB CONNECTION TWO`);
// } )();

(  (name) => {
    // simple iife
    console.log(`DB CONNECTION TWO ${name}`);
} )("Vaibhav")