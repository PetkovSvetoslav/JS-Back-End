import Component from './Component.js';
import ServiceLocator from '../utility/ServiceLocator.js';

export default class PlayerControl extends Component {
    constructor(owner, input) {
        super(owner);

        this.input = input;
        ServiceLocator.Remote.registerControls(input);
    }

    update() {
        // TODO poll input and post events to owner
        if(this.input.keysPressed["ArrowLeft"]) {
            this.owner.direction -= Math.PI / 32;
        }
        if(this.input.keysPressed["ArrowRight"]) {
            this.owner.direction += Math.PI / 32;
        }
        if(this.input.keysPressed["ArrowUp"]) {
            this.owner.post('accelerate', 0.2);
        }
        if(this.input.keysPressed["ArrowDown"]) {
            this.owner.post('accelerate', -0.05);
        }
        /*
        if(this.input.keysPressed["Space"]) {
            this.owner.shoot();
        }
        */
        ServiceLocator.Renderer.debug[0] = 'Local player position: ' + this.owner.x.toFixed(0) + ':' + this.owner.y.toFixed(0);
    }
}