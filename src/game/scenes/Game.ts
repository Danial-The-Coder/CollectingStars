import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        // this.load.setPath('assets');

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
      this.add.image(400, 300, 'sky');
    }
}
