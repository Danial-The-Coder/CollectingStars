import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  init() {
    //------WRITE CODE BELLOW-----//
    this.platforms = [];
    this.player = undefined;
    this.stars= undefined
  }

  create() {
    this.add.image(400, 300, "sky");
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");
    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
    this.player = this.physics.add.sprite(100, 450, "dude");
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);
    this.stars = this.physics.add.group({
      key: "star",
      repeat: 10,
      setXY: { x: 50, y: 0, stepX: 70 },
    });
    this.physics.add.collider(this.stars, this.platforms);
    // this.stars.children.iterate(function (child) {
    //   // @ts-ignore
    //   child.setBounceY(0.5); //Each star of the group has a vertical reflection effect of 0.5
    // });
  }

  preload() {
    this.load.image("background", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("sky", "assets/sky.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }
}
