var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update 
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload () {
    this.load.image('inteli', "assets/inteli.png");

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixe1.png');

    //carregar logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregar família
    this.load.image('fml', 'assets/fml.png');


}

function create () {

    this.add.image(400, 300, 'inteli');


    //adcionar o peixe na tela
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);

    //add família
    this.add.image(400, 525, 'fml').setScale(0.7).setOrigin(0.5, 0.9);

    //adcionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);
}

function update() {
    //add controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}