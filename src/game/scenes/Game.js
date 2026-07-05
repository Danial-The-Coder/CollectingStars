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
    this.cursor = undefined
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
    this.cursor = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: "left", //--->The name of the animation
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }), //--->Frames used
      frameRate: 10, //--->speed of switching between frames
      repeat: -1, //--->Repeat animation continuously
    });
    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
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
  update() {
    if (this.cursor.left.isDown) {
      this.player.setVelocity(-200, 200);
      this.player.anims.play("left", true);
    } else if (this.cursor.right.isDown) {
      this.player.setVelocity(200, 200);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocity(0, 0);
      this.player.anims.play("turn");
    }
      if (this.cursor.up.isDown) {
      this.player.setVelocity(0, -200);  
      this.player.anims.play("turn");
    }
  }
  collectStar(player, star){
    star.destroy()
  }

}
