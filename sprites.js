var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
 
function preload() {
    
    game.load.image('apple', 'Documents/GitHub/HTML/PhaserSnake/apple.png');
     
}

function create() {
    
    var test = game.add.sprite(200, 200, 'apple');
}