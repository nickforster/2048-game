const game = document.getElementById('game')
let field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let fieldLabels = [[], [], [], []]
let colors = {
    0: '#CDC0B4',
    1: '#EEE4DA',
    2: '#EDE0C8',
    4: '#F2B179',
    8: '#F59563',
    16: '#F67C5F',
    32: '#F75D3B',
    64: '#EFCE71',
    128: '#EDCC63',
    256: '#ECCE6E',
    512: '#EDC53F',
    1024: '#EDC301',
    2048: '#EFC231'
}

for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
        fieldLabels[i][j] = document.createElement('label')
        fieldLabels[i][j].style.backgroundColor = colors[0]
        game.append(fieldLabels[i][j])
    }
}

function addRandom() {
    let cnt = 0
    let cnt2 = 0
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 0) {
                cnt++
            }
        }
    }
    console.log(cnt)
    if (cnt === 0) {
        gameOver()
    } else {
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                if (field[i][j] === 0) {
                    cnt2++
                    if (Math.random() < 1 / cnt && cnt !== 0 || cnt2 === cnt) {
                        field[i][j] = 2
                        cnt = 0
                    }
                }
            }
        }
    }
    console.log(cnt2)
}

function drawField() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] !== 0) {
                fieldLabels[i][j].innerHTML = field[i][j]
                fieldLabels[i][j].style.backgroundColor = colors[field[i][j]]
            }
        }
    }
}

function gameOver() {
    alert('game over')
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 37 || e.keyCode === 65) {
        // Move left
        addRandom()
        drawField()
    } else if (e.keyCode === 38 || e.keyCode === 87) {
        // Move up
        addRandom()
        drawField()
    } else if (e.keyCode === 39 || e.keyCode === 68) {
        // Move right
        addRandom()
        drawField()
    } else if (e.keyCode === 40 || e.keyCode === 83) {
        // Move down
        addRandom()
        drawField()
    }
})