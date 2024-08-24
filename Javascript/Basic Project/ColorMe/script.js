document.addEventListener('DOMContentLoaded', ()=>{
    const colorBtn = document.querySelector('#colorBtn');
    const colorNumberValue = document.querySelector('#colorNumber');
    const gridItemValues = document.querySelectorAll('.grid-item');
    console.log(gridItemValues);
    colorBtn.addEventListener('click',()=>{
        gridItemValues.forEach((currentGridItem)=>{
            currentGridItem.classList.remove('active');
            if(parseInt(currentGridItem.textContent)===parseInt(colorNumberValue.value)){
                currentGridItem.classList.add('active');
            }
        })
    })
});