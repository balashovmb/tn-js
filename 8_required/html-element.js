class HtmlElement {
    constructor() {

    }
    set target(target) {
        if (!(target instanceof Element)) {
            throw new TypeError('Target must be a DOM element');
        }
        this._target = target;
    }

    get target() {
        return this._target;
    }

    set template(template) {
        this._template = template;
    }

    get template() {
        return this._template;
    }

    set styles(val) {
        if (typeof (val) !== 'object' || val === null) {
            throw new TypeError('Styles must be an object.')
        };
        this._styles = val;
        this.applyStyles();
    }

    get styles() {
        return this._styles;
    }

    set variables(val) {
        this._variables = val;
    }

    get variables() {
        return this._variables;
    }

    _render() {
        const htmlString = this.elementResultHtml();

        const html = new DOMParser().parseFromString(htmlString, 'text/html').body.childNodes[0]

        html.style.cssText = this.stylesToString();

        this.target.append(html);
        // this.applyStyles();
    }

    _unrender() {
        this.target.innerHTML = '';
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }

    applyStyles() {
        this.target.style.cssText = this.stylesToString();
    }

    stylesToString() {
        let stylesString = '';
        const styles = this.styles;
        if (!styles) {
            return '';
        }
        Object.keys(styles).map(
            styleName => stylesString += `${styleName}:${styles[styleName]};`
        );
        return stylesString;
    }

    elementResultHtml() {
        const regexp = /{{\w*}}/g;
        let resultString = this.template;
        let matches = resultString.matchAll(regexp);
        matches = Array.from(matches);
        matches.forEach(match => {
            match = match[0];
            const currentVar = match.substr(2, (match.length - 4));
            resultString = resultString.replace(match, this.variables[currentVar]);
        })
        return resultString;
    }
}

class Div extends HtmlElement {
    constructor() {
        super();
    }

    set onClick(func) {
        this._onClick = func;
        addEventListener('click', this._onClick);
    }
}
