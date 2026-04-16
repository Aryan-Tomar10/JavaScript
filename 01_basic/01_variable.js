const accountId = "144553"
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState;
// accountId = 2

accountEmail="at@at.com"
accountPassword = "21212121212"
accountCity = "Noida"
console.log(accountId);


/*
Prefer not to use war, as it is function scoped and can lead to bugs. Use let and const instead, which are block scoped.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
