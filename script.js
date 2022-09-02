let widthVariable = 0;

let loadingValue = document.getElementById("loading-bar");
let Width = document.getElementById("first-container");

// window.onload(() =>{
//     updateBar();
// })

// function updateBar() {
//     setInterval(() => {
//         widthVariable += 10;
//         loadingValue.innerText = widthVariable;
//     }, 300);
// }

let timeout = setInterval(() => {
    widthVariable += 1;
    loadingValue.innerText = widthVariable;

    Width.style.width = widthVariable + '%';
    if(widthVariable >= 100){
        clearTimeout(timeout);
    }
}, 30);