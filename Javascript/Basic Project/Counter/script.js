// increment and decrement btn
document.addEventListener("DOMContentLoaded",()=>{
    const incrementBtn = document.querySelector("#btnIncrease");
    const decrementBtn = document.querySelector("#btnDecrease");
    const changeByValue = document.querySelector("#changeBy");
    const counterValue = document.querySelector("#count");
    const btnReset = document.querySelector("#btnReset");
    
    incrementBtn.addEventListener("click", () => {
        counterValue.innerText = parseInt(counterValue.innerText) + parseInt(changeByValue.value);
    });

    decrementBtn.addEventListener('click',()=>{
        counterValue.innerText = parseInt(counterValue.innerText) - parseInt(changeByValue.value);
    })
    btnReset.addEventListener('click',()=>{
        counterValue.innerText = 0;
        changeByValue.value = 1;
    })
})

