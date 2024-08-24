// const cart =["product1", "product2", "product3"];

// createOrder(cart); // orderId
// or

//  createOrder(cart,function(){
//   proceedToPaymnent(orderId);
// })

// /// by using promises

// const promise = createOrder(cart);
// promise.then(function(orderId){
//   proceedToPaymnent(orderId);
// } ) // orderId  // success

const user = fetch("https:/api.github.com/users/dheeraj08mishra");
console.log(user);

user.then((response) => {
  console.log(response);
  response.json().then((data) => {
    console.log(data);
  });
});

/// ES5 way of doing it

// createorder(cart).then(function(orderId){
//   proceedToPayment(orderId,a).then(function(){
//     console.log(a);
//   })
// }).catch(function(error){
//   console.log(error);
// })

const cart = ["product1", "product2", "product3"];
const pr = createOrder(cart);
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (cart.length > 5) {
      resolve("orderId"); // success
    } else {
      const error = new Error("cart is empty");
      reject(error);
    }
  });
  return promise;
}

pr.then(function (response) {
  console.log("success");
})
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function () {
    console.log("finally it wil run always");
  });

//  promise.all
//  promise.all([promise1,promise2,promise3]) // it will run all the promises parallely
//   if all get success -> then [val1,val2,val3]  // success but it waits for all the promises to get resolved

//   if any one of them fails -> catch(error) // it will return the error of the first promise that fails

// lets say p1 takes 3 sec to resolve, p2 takes 2 sec to resolve and p3 takes 1 sec to resolve but p3 fails then it will return the error of p3 in 1 sec

// promise all settled
// promise.allSettled([promise1,promise2,promise3]) // it will run all the promises parallely
//   if all get success or fail -> then [{status:"fulfilled",value:val1},{status:"fulfilled",value:val2},{status:"rejected",reason:error}]  // success but it waits for all the promises to get resolved

//  if any one of them fails -> catch(error) // it will return the error of the first promise that fails but it will wait for all the promises to get resolved

// promise any
// promise.any([promise1,promise2,promise3]) // it will run all the promises parallely
//   if any one of them get success -> then val1 // success but it waits for all the promises to get resolved
// it waits for first promise to get resolved in both cases

// if all of them fails -> catch(error) // it will return the error of the agreegated of all promise that fails but it will wait for all the promises to get resolved

/// promise race
// promise.race // it will run all the promises parallely but it will return the value of the first promise that gets resolved

// what if any one of them fails -> it will return the error of the first promise that fails but it will wait for all the promises to get resolved
// basically it will return the value of the first promise that gets resolved

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(()=>{
  //   resolve("p2 resolved");
  // },2000);
  setTimeout(() => {
    reject("p2 failed");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 1000);
});

Promise.all([p1, p2, p3])
  .then(function (result) {
    console.log(result); // ["p1 resolved","p2 resolved","p3 resolved"]
  })
  .catch(function (error) {
    console.log(error); // p2 failed
  });

/// promise.allSettled
Promise.allSettled([p1, p2, p3])
  .then(function (result) {
    console.log(result); // [{status:"fulfilled",value:"p1 resolved"},{status:"rejected",reason:"p2 failed"},{status:"fulfilled",value:"p3 resolved"}]
  })
  .catch(function (error) {
    console.log(error);
  });

// promise race
Promise.race([p1, p2, p3])
  .then(function (result) {
    console.log(result); // p3 resolved // it will return the value of the first promise that gets resolved
  })
  .catch(function (error) {
    console.log(error);
  });

// promise any
Promise.any([p1, p2, p3])
  .then(function (result) {
    console.log(result); // p3 resolved // it will return the value of the first promise that gets resolved success
  })
  .catch(function (error) {
    console.log(error.errors); /// if all failed then it will return the error of the agreegated of all promise that fails
  });
