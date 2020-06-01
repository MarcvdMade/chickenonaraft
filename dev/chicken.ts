/// <reference path="tree.ts"/>

class Chicken {
    
    public div: HTMLElement
    private x:number
    private y:number
    private width:number
    private height:number
    private gun: Gun
    private game: Game

    constructor(x:number, y:number, tree:Tree, g: Game) {
        this.div = document.createElement("bird")
        tree.div.appendChild(this.div)
                
        this.x = x
        this.y = y
        this.width = 67
        this.height = 110
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        this.game = g
        

        // maak hier een click listener
        this.div.addEventListener("click", () => this.handleClick()) 
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
    }

    handleClick() {
        // console.log(this)
        if(this.gun) {
            this.gun.fire()
        } else {
            this.gun = new Gun(this, this.game)
        }
    }

}