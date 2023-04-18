
let side = 30





function setup() {
        
        createCanvas(30, matrix.length * side)
        
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

