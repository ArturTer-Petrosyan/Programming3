var socket = io()
var side = 30


function setup() {

        createCanvas(30 * side, 30 * side)
        background("gray")
}

socket.on("Winter", function (data) {
        weath = data;
})
socket.on("Summer", function (data) {
        weath = data;
})
socket.on("Spring", function (data) {
        weath = data;
})
socket.on("Autumn", function (data) {
        weath = data;
})
var weath = "Spring";

function changeColor(matrix) {

  
                        for (let y = 0; y < matrix.length; y++) {
                                for (let x = 0; x < matrix[y].length; x++) {
                                        var toBot = side - side * 0.3
                                        textSize(toBot);
                                        if (matrix[y][x] == 1) {
                                                rect(x * side, y * side, side, side)
                                                text('🥦', x * side, y * side + toBot)
                                        
                                        if (weath == "Spring") {
                                                fill("green");
                                        }
                                        else if (weath == "Summer") {
                                                fill("orange");
                                        }
                                        else if (weath == "Autumn") {
                                                fill("yellow");
                                        }
                                        if (weath == "Winter") {
                                                fill("darkblue");
                                        }
                                }
                                        // if (matrix[y][x] == 1) {
                                        //         fill("green")
                                        // rect(x * side, y * side, side, side)
                                        // text('🥦', x * side, y * side + toBot)
                                        else if (matrix[y][x] == 2) {
                                                fill("yellow")
                                                rect(x * side, y * side, side, side)
                                                text('🐝', x * side, y * side + toBot)
                                        } else if (matrix[y][x] == 3) {
                                                fill("white")
                                                rect(x * side, y * side, side, side)
                                                text('🐄', x * side, y * side + toBot)
                                        }
                                        else if (matrix[y][x] == 4) {
                                                fill("red")
                                                rect(x * side, y * side, side, side)
                                                text('🔴', x * side, y * side + toBot)

                                        }
                                        else if (matrix[y][x] == 5) {
                                                fill("purple")
                                                rect(x * side, y * side, side, side)
                                                text('💀', x * side, y * side + toBot)

                                        }
                                        else if (matrix[y][x] == 6) {
                                                fill("orange")
                                                rect(x * side, y * side, side, side)
                                                text('🔥', x * side, y * side + toBot)

                                        }
                                        else if (matrix[y][x] == 7) {
                                                fill("blue")
                                                rect(x * side, y * side, side, side)
                                                text('🌊', x * side, y * side + toBot)

                                        }
                                        else if (matrix[y][x] == 8) {
                                                fill("black")
                                                rect(x * side, y * side, side, side)
                                                text('🐍', x * side, y * side + toBot)

                                        }
                                        else {
                                                fill("gray")
                                                rect(x * side, y * side, side, side)

                                        }

                                }
                        }






                }








socket.on("send matrix", changeColor)


function Winter() {
        socket.emit("Winter");
}
function Summer() {
        socket.emit("Summer");
}
function Spring() {
        socket.emit("Spring");
}
function Autumn() {
        socket.emit("Autumn");
}
function AddGrass() {
        socket.emit("addGrass");
}
function AddGrassEater() {
        socket.emit("addGrassEater");
}
function KillAll() {
        socket.emit("killAll");
}
function AddPredator() {
        socket.emit("addPredator");
}
function AddCow() {
        socket.emit("addCow");
}
function AddSnake() {
        socket.emit("addSnake");
}
function AddJur() {
        socket.emit("addJur");
}
function AddKrak() {
        socket.emit("addKrak");
}