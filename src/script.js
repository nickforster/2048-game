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

// Draw and create the field at the start of the game
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
    if (cnt !== 0) {
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
}

function drawField() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 0) {
                fieldLabels[i][j].style.backgroundColor = colors[field[i][j]]
                fieldLabels[i][j].innerHTML = ''
            } else {
                fieldLabels[i][j].style.backgroundColor = colors[field[i][j]]
                fieldLabels[i][j].innerHTML = field[i][j]
            }
        }
    }
}

function moveUp() {
    for (let i = 0; i < field.length - 1; i++) {
        for (let j = 1; j < field.length; j++) {
            for (let k = 0; k < field[j].length; k++) {
                if (field[j - 1][k] === 0) {
                    field[j - 1][k] = field[j][k]
                    field[j][k] = 0
                }
            }
        }
    }
}

function mergeUp() {
    for (let i = 0; i < field.length - 1; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === field[i + 1][j]) {
                field[i][j] *= 2
                field[i + 1][j] = 0
            }
        }
    }
}

function moveLeft() {
    for (let i = 0; i < field.length - 1; i++) {
        for (let j = 0; j < field.length; j++) {
            for (let k = 1; k < field[j].length; k++) {
                if (field[j][k - 1] === 0) {
                    field[j][k - 1] = field[j][k]
                    field[j][k] = 0
                }
            }
        }
    }
}

function mergeLeft() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length - 1; j++) {
            if (field[i][j] === field[i][j + 1]) {
                field[i][j] *= 2
                field[i][j + 1] = 0
            }
        }
    }
}

function moveRight() {
    for (let i = 0; i < field.length - 1; i++) {
        for (let j = 0; j < field.length; j++) {
            for (let k = field[j].length; k > 0; k--) {
                if (field[j][k] === 0) {
                    field[j][k] = field[j][k - 1]
                    field[j][k - 1] = 0
                }
            }
        }
    }
}

function mergeRight() {
    for (let i = 0; i < field.length; i++) {
        for (let j = field[i].length; j > 0; j--) {
            if (field[i][j] === field[i][j - 1]) {
                field[i][j] *= 2
                field[i][j - 1] = 0
            }
        }
    }
}

function moveDown() {
    for (let i = 0; i < field.length - 1; i++) {
        for (let j = field.length - 1; j > 0; j--) {
            for (let k = 0; k < field[j].length; k++) {
                if (field[j][k] === 0) {
                    field[j][k] = field[j - 1][k]
                    field[j - 1][k] = 0
                }
            }
        }
    }
}

function mergeDown() {
    for (let i = field.length - 1; i > 0; i--) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === field[i - 1][j]) {
                field[i][j] *= 2
                field[i - 1][j] = 0
            }
        }
    }
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 37 || e.keyCode === 65) {
        // A or arrow left was pressed
        moveLeft()
        mergeLeft()
        moveLeft()
        addRandom()
        drawField()
    } else if (e.keyCode === 38 || e.keyCode === 87) {
        // W oder arrow up was pressed
        moveUp()
        mergeUp()
        moveUp()
        addRandom()
        drawField()
    } else if (e.keyCode === 39 || e.keyCode === 68) {
        // Move right
        moveRight()
        mergeRight()
        moveRight()
        addRandom()
        drawField()
    } else if (e.keyCode === 40 || e.keyCode === 83) {
        // Move down
        moveDown()
        mergeDown()
        moveDown()
        addRandom()
        drawField()
    }
})