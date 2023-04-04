function matrixGenerator(matrixSize, grass, grassEater, cow, predator, tuyn, krak,jur,snake) {
        var matrix = []
        ////  matrix սարքելու հատված
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

let matrix = matrixGenerator(30, 17, 7, 8, 3, 6,8 ,12,9)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var cowArr = []
var predatorArr = [] 
var tuynArr = []
var krakArr = []
var jurArr = []
var snakeArr = []


function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
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
}


        function draw() {
                for (let y = 0; y < matrix.length; y++) {
                        for (let x = 0; x < matrix[y].length; x++) {
                                var toBot = side  - side * 0.3
                                textSize(toBot);
                                if (matrix[y][x] == 1) {
                                        fill("green")
                                        rect(x * side, y * side, side, side)
                                        text('🥦',x * side,y * side + toBot)
                                } else if (matrix[y][x] == 2) {
                                        fill("yellow")
                                        rect(x * side, y * side, side, side)
                                        text('🐝',x * side,y * side + toBot)
                                } else if (matrix[y][x] == 3) {
                                        fill("white")
                                        rect(x * side, y * side, side, side)
                                        text('🐄',x * side,y * side + toBot)
                                }
                                else if (matrix[y][x] == 4) {
                                        fill("red")
                                        rect(x * side, y * side, side, side)
                                        text('🔴',x * side,y * side + toBot)

                                }
                                else if (matrix[y][x] == 5) {
                                        fill("purple")
                                        rect(x * side, y * side, side, side)
                                        text('💀',x * side,y * side + toBot)

                                }
                                 else if (matrix[y][x] == 6) {
                                        fill("orange")
                                        rect(x * side, y * side, side, side)
                                        text('🔥',x * side,y * side + toBot)

                                }
                                else if (matrix[y][x] == 7) {
                                        fill("blue")
                                        rect(x * side, y * side, side, side)
                                        text('🌊',x * side,y * side + toBot)

                                }
                                else if (matrix[y][x] == 8) {
                                        fill("black")
                                        rect(x * side, y * side, side, side)
                                        text('🐍',x * side,y * side + toBot)

                                }
                                else {
                                        fill("gray")
                                        rect(x * side, y * side, side, side)
                                        text('',x * side,y * side + toBot)

                                }

                        }
                }



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
                console.log(cowArr.length);
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


        }

