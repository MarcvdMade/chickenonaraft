/// <reference path="tree.ts"/>

class Game {
    
    private trees:Tree[] = []
    private bullet: Bullet[] = []
 
    constructor() {
        // de game heeft trees nodig
        this.trees.push( new Tree(200 , 200, this))
        this.trees.push( new Tree(500 , 500, this))

              


        
        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].move()
            // this.bullet.move()
            
        }

        //for voor bullets
        for(let b = 0; b < this.bullet.length; b++) {
            this.bullet[b].move()
        }
        
                
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }

    public addBullet(x: number, y: number) {
        this.bullet.push(new Bullet(x, y))
        // console.log("added bullet")
    }
} 

window.addEventListener("load", () => new Game())