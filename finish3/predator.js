class Predator extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.energy = 15
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char, char1, char2, char3,char4) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i])
                }
            }
        }

        return found
    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let pre = new Predator(newX, newY)

            predatorArr.push(pre)


        }
    }
    eat() {
        let emptyCell = this.chooseCell(1, 2, 3, 8,5)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
                for (let i in cowArr) {
                    if (newX == cowArr[i].x && newY == cowArr[i].y) {
                        cowArr.splice(i, 1)
                        break;
                    }
                }
                for (let i in snakeArr) {
                    if (newX == snakeArr[i].x && newY == snakeArr[i].y) {
                        snakeArr.splice(i, 1)
                        break;
                    }
                }
                    for (let i in tuynArr) {
                        if (newX == tuynArr[i].x && newY == tuynArr[i].y) {
                            this.energy -= 45
                            tuynArr.splice(i, 1)
                            break;
                        }
                    }
                

            

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 40) {
                this.mul()
            }

        } else {
            this.move()
        }
    }
    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0

        for (let i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1)
            }
        }
    }

}

