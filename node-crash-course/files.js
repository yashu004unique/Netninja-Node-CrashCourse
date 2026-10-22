const fs = require("fs");

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
console.log("last line");

fs.writeFile("./docs/blog2.txt", "Hellooo againnn", () => {
  console.log("file was written");
});

// creating a folder

//  fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("folder created");
//     }
//   })

// doesnt throw error if folder already exists

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("folder created");
//     }
//   });
// }

// check if folder exists, if it does delete it, if not create it
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
}

// deleting files

if (fs.existsSync("./docs/delete.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
