import Phaser from 'phaser'

export default class ParallaxScene extends Phaser.Scene
{
    constructor(){
        super('parallax-scene')

    }

        preload(){
        this.load.image('TopLayer', 'assets/TopLayer.png')
        this.load.image('Light', 'assets/Light.png')
        this.load.image('MiddleLayer', 'assets/MiddleLayer.png')
        this.load.image('DownLayer', 'assets/DownLayer.png')
        this.load.image('Sky', 'assets/Sky.png')

    }

    create(){
        const width = this.scale.width
        const height = this.scale.height
        this.add.image(400, 300, 'TopLayer')
        this.add.image(width * 0.5, height * 0.5, 'Light')
        this.add.image(width * 0.5, height * 0.5, 'MiddleLayer')
        this.add.image(width * 0.5, height * 0.5, 'DownLayer')
        this.add.image(width * 0.5, height * 0.5, 'Sky')
    }

}
