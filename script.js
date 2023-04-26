const main = document.getElementById('grid');
const shuffle = document.getElementById('shuffle');
const range = document.getElementById('slide');

let min = 20
let max = 500

var arrayLength = 160;
const val = range.value;

console.log(val)
shuffle.onclick = renderBars;
range.oninput = setVal;

renderBars(arrayLength);

function setVal() {
    let value = range.value;
    arrayLength = value;
    renderBars(arrayLength);
}

function renderBars() {
    main.innerHTML = '';
    var unsortedArray = []
    for (let i = 0; i < arrayLength; i++) {
        unsortedArray.push(Math.floor(Math.random() * (max - min) + min));
    }

    for (let i = 0; i < arrayLength; i++) {
        const barDiv = document.createElement('div');
        barDiv.setAttribute('class', 'array-bar');
        barDiv.setAttribute('id', `array-bar${i}`);
        
        main.appendChild(barDiv);

        document.getElementById(`array-bar${i}`).style.height = `${unsortedArray[i]}px`;
    }  
}



