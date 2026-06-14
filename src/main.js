import { getMaxListeners } from 'node:cluster';
import CollectingStarsScene from './scenes/CollectingStarsScene';
import{ Game } from 'phaser';
scene: [CollectingStarsScene];

import * as Phaser from 'phaser';

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    // parent: 'game-container',
    // backgroundColor: '#028af8',
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 400 }
    //     }
    // }
    scene: [
      CollectingStarsScene
    ]
};
export default new Game(config)