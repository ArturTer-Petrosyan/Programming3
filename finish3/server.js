var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."))

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log("Server is run");
});

function matrixGenerator(matrixSize, grass, grassEater, cow, predator, tuyn, krak, jur, snake) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }

    // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 1
    }
    //GrassEater 2

    for (let i = 0; i < grassEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 2
    }

    for (let i = 0; i < cow; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 3
    }

    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 4
    }
    for (let i = 0; i < tuyn; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 5
    }
    for (let i = 0; i < krak; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 6
    }
    for (let i = 0; i < jur; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 7
    }
    for (let i = 0; i < snake; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 8
    }
    return matrix
}
matrix = matrixGenerator(30, 17, 7, 8, 3, 6, 8, 12, 9)
io.sockets.emit("send matrix",matrix)

grassArr = []
grassEaterArr = []
cowArr = []
predatorArr = []
tuynArr = []
krakArr = []
jurArr = []
snakeArr = []


Grass = require("./grass")
Grasseater = require("./grassEater")
Cow = require("./cow")
Jur = require("./jur")
Krak = require("./krak")
Predator = require("./predator")
Snake = require("./snake")
Tuyn = require("./tuyn")


function createObject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)

                grassArr.push(grass)


            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let cow = new Cow(x, y)
                cowArr.push(cow)
            } else if (matrix[y][x] == 4) {
                let pre = new Predator(x, y)
                predatorArr.push(pre)
            } else if (matrix[y][x] == 5) {
                let tuyn = new Tuyn(x, y)
                tuynArr.push(tuyn)
            } else if (matrix[y][x] == 6) {
                let krak = new Krak(x, y)
                krakArr.push(krak)
            }
            else if (matrix[y][x] == 7) {
                let jur = new Jur(x, y)
                jurArr.push(jur)
            }
            else if (matrix[y][x] == 8) {
                let snake = new Snake(x, y)
                snakeArr.push(snake)

            }

        }
    }
    io.sockets.emit("send matrix",matrix)
}

function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in cowArr) {
        cowArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    // for (let i in tuynArr) {
    //         tuynArr[i].eat()
    // }
    for (let i in krakArr) {
        krakArr[i].eat()
    }
    for (let i in jurArr) {
        jurArr[i].eat()
    }
    for (let i in snakeArr) {
        snakeArr[i].eat()
    }
    io.sockets.emit("send matrix",matrix)

}

setInterval(game,300)

io.on("connection",function(){
 createObject()
})