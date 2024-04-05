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

pr.then(function(response) {
  console.log("success");

}).catch(function(error){
  console.log(error.message);
}).then(function(){
  console.log("finally it wil run always");
}); 