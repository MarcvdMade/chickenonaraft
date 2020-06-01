"use strict";
var Chicken = (function () {
    function Chicken(x, y, tree, g) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.game = g;
        this.div.addEventListener("click", function () { return _this.handleClick(); });
    }
    Chicken.prototype.handleClick = function () {
        if (this.gun) {
            this.gun.fire();
        }
        else {
            this.gun = new Gun(this, this.game);
        }
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.x = 0;
        this.y = 0;
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.game = g;
        this.chicken = (new Chicken(0, -70, this, this.game));
        this.chicken = (new Chicken(100, -70, this, this.game));
        this.chicken = (new Chicken(200, -70, this, this.game));
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullet = [];
        this.trees.push(new Tree(200, 200, this));
        this.trees.push(new Tree(500, 500, this));
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < this.trees.length; i++) {
            this.trees[i].move();
        }
        for (var b = 0; b < this.bullet.length; b++) {
            this.bullet[b].move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function (x, y) {
        this.bullet.push(new Bullet(x, y));
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, g) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.game = g;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        this.game.addBullet(rect.left, rect.top);
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map