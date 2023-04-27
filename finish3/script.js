var socket = io()
var side = 30





function setup() {

        createCanvas(30 * side, 30 * side)
        background("gray")
}


function changeColor(matrix) {
        console.log("Asdadadwa");
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.3
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect(x * side, y * side, side, side)
                                text('🥦', x * side, y * side + toBot)
                        } else if (matrix[y][x] == 2) {
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
                                text('', x * side, y * side + toBot)

                        }

                }
        }



      


}

socket.on("send matrix",changeColor)

function AddGrass(){
        socket.emit("addGrass");
    }
    function AddGrassEater(){
        socket.emit("addGrassEater");
    }
    function KillAll(){
        socket.emit("killAll");
    }
    function AddPredator(){
        socket.emit("addPredator");
    }
    function AddCow(){
        socket.emit("addCow");
    }
    function AddSnake(){
        socket.emit("addSnake");
    }
    function AddJur(){
        socket.emit("addJur");
    }
    function AddKrak(){
        socket.emit("addKrak");
    }