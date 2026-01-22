
let totalFloors, totalLifts;
let liftStatus = [];

function initializeLifts() {
    totalFloors = +totalFloors.value;
    totalLifts = +totalLifts.value;
    liftStatus = [];

    liftSystem.innerHTML = '';

    const floorsDiv = document.createElement('div');
    floorsDiv.style.display = 'flex';
    floorsDiv.style.flexDirection = 'column-reverse';

    for (let f = 0; f < totalFloors; f++) {

        const floor = document.createElement('div');
        floor.className = 'floor';

        const label = document.createElement('span');
        label.innerText = `Floor ${f}`;

        const btns = document.createElement('div');
        btns.className = 'buttons';

        if (f !== totalFloors - 1)
            btns.innerHTML += `<button onclick="callLift(${f})">Up</button>`;
        
        if (f !== 0)
            btns.innerHTML += `<button onclick="callLift(${f})">Down</button>`;

        floor.append(label, btns);
        floorsDiv.appendChild(floor);
    }

    liftSystem.appendChild(floorsDiv);

}