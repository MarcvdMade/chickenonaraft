/// <reference path="chicken.ts" />

class Tree {
    
    public div: HTMLElement
    private x:number = 0
    private y:number = 0
    private width:number
    private height:number
    private speed:number
    private chicken: Chicken
    private game: Game

    constructor(x:number, y:number, g: Game) {
        this.div = document.createElement("tree")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)
        
        this.speed = Math.random() * 4 + 1
        this.width = 414
        this.height = 86
        this.x = x
        this.y = y
        this.game = g

        // dit vlot heeft kippen nodig !
        // ...
        this.chicken = (new Chicken(0,-70, this, this.game))
        this.chicken = (new Chicken(100,-70, this, this.game))
        this.chicken = (new Chicken(200,-70, this, this.game))
    }
    
    public move():void {
        this.x += this.speed
        if(this.x > window.innerWidth) this.x = -450
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}