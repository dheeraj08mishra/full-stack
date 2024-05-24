console.log("first");

setTimeout(() => {
  console.log("second");
},5000);

console.log("the end");


const cart = ["product 1", "product 2", "product 3"];
api.createOrder(cart, function() {
  api.proceedtoPayment(function() {
    api.showOrderSummay(function() {
      console.log("Order completed");
    });
  } );
});