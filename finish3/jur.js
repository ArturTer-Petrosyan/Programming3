let LivingCreature = require("./LivingCreature")

module.exports = class Jur extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.energy = 20
        this.directions = [ ];
    }


    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(char){
        this.getNewCoordinates()
        let found = []
        return super.chooseCell(char)
   }


     mul(){
         let emptyCell = this.chooseCell(0)
         let newCell = emptyCell(Math.floor(Math.random() * emptyCell.length))

            if(newCell){
                 let newX = newCell[0]
                 let newY = newCell[1]

                 matrix[newY][newX]  = 7

                 let jur = new Jur(newX,newY)

                 jurArr.push(jur)


            }
     }


     eat(){
        let emptyCell = this.chooseCell(6)
        let newCell = random(emptyCell)

           if(newCell ){
               this.energy += 7
            let newX = newCell[0]
            let newY = newCell[1]

                   for(let i in krakArr){
                            if(newX == krakArr[i].x  && newY == krakArr[i].y){
                                      krakArr.splice(i,1)
                                      break;
                            }
                   }

                   matrix[newY][newX] = 7
                   matrix[this.y][this.x] = 0


                   this.x = newX
                   this.y = newY

                   if(this.energy > 30){
                        this.mul()
                   }

           }else{
               this.move()
           }
     }

     move(){
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 7
                matrix[this.y][this.x] = 0
                
                this.x = newX
                this.y = newY

                this.energy--

                if(this.energy < 0){
                    this.die ()
                }
            }
     }


     die(){
         matrix[this.y][this.x] = 0

           for(let i in jurArr){
                    if(this.x == jurArr[i].x && this.y == jurArr[i].y) {
                              jurArr.splice(i,1)
                    }
           }
     }


}