let a = 0;
let b = 10;

let wd = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
wd.then((data) => {
  b = data;
  console.log(a+b);
});
