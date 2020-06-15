class HtmlElement {
    constructor(target){
        this.target = target;
    }
    //добавить проверку
    set target(target) {
        this._target = target;
    }

    get target() {
        return this._target;
    }
}