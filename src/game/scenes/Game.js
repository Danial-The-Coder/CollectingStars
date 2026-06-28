import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    // this.cameras.main.setBackgroundColor(0x00ff00);

    // this.add.image(512, 384, 'background').setAlpha(0.5);

    // this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
    //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
    //     stroke: '#000000', strokeThickness: 8,
    //     align: 'center'
    // }).setOrigin(0.5);

    // this.input.once('pointerdown', () => {

    //     this.scene.start('GameOver');

    // });
    //
    //
    this.add.image(400, 300, "sky");
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
