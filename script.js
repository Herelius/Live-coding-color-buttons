const colorBox = document.querySelector('.color');
const box = document.querySelector('.box');

colorBox.addEventListener('click', event => {
    event.preventDefault();
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    colorBox.style.backgroundColor = color;
    box.addEventListener('click', event => {
        box.style.backgroundColor = color;
    })
})
