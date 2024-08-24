// increment and decrement btn
document.addEventListener("DOMContentLoaded",()=>{
    const incrementBtn = document.querySelector("#btnIncrease");
    const decrementBtn = document.querySelector("#btnDecrease");
    const changeByValue = document.querySelector("#changeBy");
    const counterValue = document.querySelector("#count");
    const btnReset = document.querySelector("#btnReset");
    const lightTheme = document.querySelector("#lightTheme");
    const darkTheme = document.querySelector('#darkTheme');
    const nav = document.querySelector('.navBar');
    
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

    lightTheme.addEventListener('click',()=>{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('h1').style.color = 'black';
        
    });
    darkTheme.addEventListener('click',()=>{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector('h1').style.color = 'black';
    })
})

