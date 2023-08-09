"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase(); // should avoid this
    return num + 2;
}
addTwo(5);
addTwo("5"); // should not be allowed
// correction
function addThree(num) {
    return num + 3;
}
// on more case
function addFour(num) {
    return "Hello"; // instead for return number it is returning string -- avoid this
}
addFour(5);
// correction --  function return type
function addFour1(num) {
    //   return 'hello' -- not allowed - Type 'string' is not assignable to type 'number'
    return num + 4;
}
addFour1(5);
addThree(5);
// addThree('5') -- Argument of type 'string' is not assignable to parameter of type 'number'
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(5); // should not allowed
//correction
function getUpper1(val) {
    return val.toUpperCase();
}
getUpper1("abhinash");
// getUpper1(1) -- Argument of type 'number' is not assignable to parameter of type 'string'
function signUpUser(name, email, isPaid) { }
signUpUser(1, 2, 3); // any type -- avoid this
// correction
function signUpUser1(name, email, isPaid) { }
// signUpUser1(1, 3, 4)  -- error
signUpUser1("abhinash", "test@test.com", false);
// default value
function signIn(username, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
// signIn('abhi', 'test@test.com') -- An argument for 'isPaid' was not provided.
signIn("abhi", "test@test.com");
// Arrow funciton
var getHello = function (s) {
    return "";
};
var games = ["cricket", "hockey", "football"];
games.map(function (game) {
    // ts knows the type of incoming context 'game'. so there is no need of mentioning the type. I can rely on ts
    return "game is ".concat(game);
});
// In above code map method can return any type -- to handle those cases - mention function return type
games.map(function (game) {
    // return 1 -- not allowed -- Type 'number' is not assignable to type 'string'
    return "game is ".concat(game);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("not connected");
