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

    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 1
    }
    

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
io.sockets.emit("send matrix", matrix)

grassArr = []
grassEaterArr = []
cowArr = []
predatorArr = []
tuynArr = []
krakArr = []
jurArr = []
snakeArr = []


const Grass = require("./grass")
const GrassEater = require("./grassEater")
const Cow = require("./cow")
const Jur = require("./jur")
const Krak = require("./krak")
const Predator = require("./predator")
const Snake = require("./snake")
const Tuyn = require("./tuyn")


function createObject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)

                grassArr.push(grass)


            } else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y)
                grassEaterArr.push(grassEater)
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
    io.sockets.emit("send matrix", matrix)
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
    io.sockets.emit("send matrix", matrix)

}

setInterval(game, 300)
function Winter() {
    weath = "Winter";
    io.sockets.emit("Winter", weath);
}

function Summer() {
    weath = "Summer";
    io.sockets.emit("Summer", weath);
}

function Spring() {
    weath = "Spring";
    io.sockets.emit("Spring", weath);
}
function Autumn() {
    weath = "Autumn";
    io.sockets.emit("Autumn", weath);
}


function AddGrass() {
    for (var i = 0; i < 8; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrassEater() {
    let count = 0;
    for (var i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (count < 8) {
            if (i < 30) {
                if (matrix[y][x] == 0) {
                    count++;
                    matrix[y][x] = 2;
                    var grassEater = new GrassEater(x, y);
                    grassEaterArr.push(grassEater);
                }

            } else if (i >= 30) {
                if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                    count++;
                    matrix[y][x] = 2;
                    var grassEater = new GrassEater(x, y);
                    grassEaterArr.push(grassEater);
                }
            }
        }


    }

    io.sockets.emit("send matrix", matrix);

    }  

    function AddCow() {
        for (var i = 0; i < 8; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
                var cow = new Cow(x, y);
                cowArr.push(cow);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddPreadator() {
        for (var i = 0; i < 8; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4;
                var predator = new Predator(x, y);
                predatorArr.push(predator);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }

    function AddKrak() {
        for (var i = 0; i < 8; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 6;
                var krak = new Krak(x, y);
                krakArr.push(krak);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function KillAll() {
        grassArr = [];
        grassEaterArr = [];
        predatorArr = [];
        cowArr = [];
        snakeArr = [];
        jurArr = [];
        krakArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
            }
        }
        
        
        io.sockets.emit("send matrix", matrix);
    }
function AddJur() {
    for (var i = 0; i < 8; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7;
            var jur = new Jur(x, y);
            jurArr.push(jur);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddSnake() {
    for (var i = 0; i < 8; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 8;
            var snake = new Snake(x, y);
            snakeArr.push(snake);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
io.on('connection', function (socket) {
    createObject();
    socket.on("Spring", Spring);
    socket.on("Summer", Summer);
    socket.on("Autumn", Autumn);
    socket.on("Winter", Winter);
    socket.on("addGrass", AddGrass);
    socket.on("addGrassEater", AddGrassEater);
    socket.on("killAll", KillAll);
    socket.on("addPredator", AddPreadator);
    socket.on("addCow", AddCow);
    socket.on("addSnake", AddSnake);
    socket.on("addJur", AddJur);
    socket.on("addKrak", AddKrak);
})


var statistics = {};
setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.snake = snakeArr.length;
    statistics.cow = cowArr.length;
    statistics.jur = jurArr.length;
    statistics.krak = krakArr.length;
    statistics.tuyn = tuynArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000);