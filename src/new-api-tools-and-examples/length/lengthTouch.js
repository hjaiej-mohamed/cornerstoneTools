import lengthTool from './lengthTool.js';

export default class extends lengthTool {
  constructor (name) {
    super(name || 'lengthTouch');

    this.isTouchTool = true;
  }
}
