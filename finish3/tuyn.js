class Tuyn {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 10
    }

    die() {
        matrix[this.y][this.x] = 0

        for(let i in tuynArr){
                 if(this.x == tuynArr[i].x && this.y == tuynArr[i].y) {
                           tuynArr.splice(i,1)
                 }
        }
  }
//   tuynimernel(){
//     if ( grassEaterArr.length == 0 && jurArr.length == 0 && krakArr.length == 0 && predatorArr.length == 0 && snakeArr.length == 0) {
//         this.die()
//     }
// }

    }
