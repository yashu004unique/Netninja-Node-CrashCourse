const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

console.log(os.platform());
console.log(os.homedir());
