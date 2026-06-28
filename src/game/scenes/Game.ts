import { Scene } from 'phaser';

export class Game extends Scene
{
  platforms: string[];

    constructor ()
    {
        super('Game');
        this.platforms = []
        this.player = undefined;
        this.stars= undefined;
    }


    init() {
    this.platforms = [];
    this.player = undefined;
    this.stars= undefined
  }
    preload ()
    {

      this.load.image('background', './src/assets/sky.png');
      this.load.image('ground', './src/assets/platform.png');
      this.load.image('star', './src/assets/star.png');
      this.load.image('sky', './src/assets/sky.png');
      this.load.image('bomb', './src/assets/bomb.png');
      this.load.spritesheet('dude', './src/assets/dude.png', {
         frameWidth: 32,
         frameHeight: 48
      });


    }

    create ()
    {
      this.stars = this.physics.add.group({
        key: "star",
        repeat: 10,
        setXY: { x: 50, y: 0, stepX: 70 },
      });
      this.stars.children.iterate(function (child) {
      child.setBounceY(0.5);
      });
      this.player = this.physics.add.sprite(100, 450, "dude");
      this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
      // this.platforms=this.physics.add.staticGroup()
      this.platforms.create(600, 400, "ground");
      this.platforms.create(50, 250, "ground");
      this.platforms.create(750, 220, "ground");
      this.add.image(400, 300, 'sky');
      this.player.setCollideWorldBounds(true);
      this.physics.add.collider(this.stars, this.platforms);
    }
}
