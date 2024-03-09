var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
     },
 

    scene: {
        preload: preload,
        create: create,
        update: update 
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload () {
    this.load.image('marclaro', "assets/marclaro.png");

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixe1.png');

    //carregar logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregar família
    this.load.image('fml', 'assets/fml.png');

    this.load.image('mar', 'assets/marescuro.png');

    this.load.image('tartaruga', 'assets/tartaruga.png')


}

function create () {


    if(game.scale.orientation === Phaser.Scale.LANDSCAPE){
        this.add.image(400, 300, 'mar');
    } else if(game.scale.orientation === Phaser.Scale.PORTRAIT){
        this.add.image(400, 300, 'marclaro');
    }


    if (game.device.os.desktop){
        peixinho = this.add.image(400, 300, 'tartaruga').setOrigin(0.5, 0.5).setFlip(true, false);
    } else{
        
        peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
    }

    //add família
    this.add.image(400, 525, 'fml').setScale(0.7).setOrigin(0.5, 0.9);

    //adcionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }  
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        } 
    });
}

function update() {
    //add controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}