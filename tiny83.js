function drawGrid() {
    for (let i = 0; i < H; i++) {
	for (let j = 0; j < W; j++) {
            $(`tr[data-i=${i}] td[data-j=${j}]`).removeClass().addClass(grid[i][j] ? 'on' : 'off');
	}
    }
}

function gridToPairOfUint160() {
    let gridR = grid.map((val, index) => [grid].map(row => row[index]).reverse());
    grid2R = gridR[0].map((val, index) => gridR.map(row => row[index]).reverse())[0];
    let leftPart = 0n;
    let rightPart = 0n;
    for (let i = 0; i < 14; i++) {
	for (let j = 0; j < 22; j++) {
            const power = BigInt(13 - i) + 14n * BigInt(j % 11);
            const diff = grid2R[i][j] ? (2n ** power) : 0n;
            if (j < 11) {
		leftPart += diff;
            } else {
		rightPart += diff;
            }
	}
    }
    leftCode = leftPart.toString();
    rightCode = rightPart.toString();
    return `${leftCode}, ${rightCode}`;
}


togglePixel = function(e) {
    let i = e.target.parentElement.dataset['i'];
    let j = e.target.dataset['j'];
    grid[i][j] = !grid[i][j]
    if (e.target.className == "off") { e.target.className = "on"}
    else {e.target.className = "off"}
}

Array.from(document.getElementsByTagName('td')).forEach( function(a) { a.onclick = togglePixel})

btn = document.createElement('input')
btn.type="button"
btn.value = "print code"
btn.addEventListener('click', x => alert(gridToPairOfUint160()))

document.querySelector('.inputs').appendChild(btn)
