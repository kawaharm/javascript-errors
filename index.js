// Javascript Errors

/* EvalError - Creates an instance representing an error that occurs regarding the 
    global function eval() */
try {
    throw new EvalError('Hello', 'index.js', 5);
} catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message);              // "Hello"
    console.log(e.name);                 // "EvalError"
    console.log(e.fileName);             // "someFile.js"
    console.log(e.lineNumber);           // 10
    console.log(e.columnNumber);         // 0
    console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}

/* RangeError - is thrown when trying to pass a value as an argument to a function 
that does not allow a range that includes the value.*/

// This function will stop the code if it runs into an error
function check(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

/* This try/catch statement will still run code even after error is found
in try statement */
try {
    check(2000)
}
catch (error) {
    if (error instanceof RangeError) {
        console.log('Error: the number is not in range')
        // Handle the error
    }
}
// check(2000);
console.log('Hello Avery')

/* ReferenceError - object represents an error when a non-existent variable is referenced.*/
try {
    let a = undefinedVariable
} catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "undefinedVariable is not defined"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "Scratchpad/1"
    console.log(e.lineNumber)                 // 2
    console.log(e.columnNumber)               // 6
    console.log(e.stack)                      // "@Scratchpad/2:2:7\n"
}

try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
} catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
}

/* SyntaxError - thrown when the JavaScript engine encounters tokens or token order that 
    does not conform to the syntax of the language when parsing code. */

try {
    eval('hoo bar');
} catch (e) {
    console.error(e instanceof SyntaxError);
    console.error(e.message);
    console.error(e.name);
    console.error(e.fileName);
    console.error(e.lineNumber);
    console.error(e.columnNumber);
    console.error(e.stack);
}