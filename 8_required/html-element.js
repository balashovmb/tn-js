class HtmlElement {
    set target(target) {
        if (!(target instanceof Element)) {
            throw new TypeError('Target should be a DOM element');
        }
        this._target = target;
    }

    set template(template) {
        if(typeof(template) !== 'string')
            throw new TypeError('Styles should be a string.')
        this._template = template;
        this.updateElement()
    }

    set styles(val) {
        if (typeof (val) !== 'object' || val === null) {
            throw new TypeError('Styles should be an object.')
        };
        this._styles = val;
        if (this._element) { this.applyStyles(); }
    }

    set variables(val) {
        if (typeof (val) !== 'object' || val === null) {
            throw new TypeError('Variables should be an object.')
        };
        this._variables = val;
    }

    updateElement() {
        const htmlString = this.elementResultHtml();
        this._element = new DOMParser().parseFromString(htmlString, 'text/html').body.childNodes[0]

    }

    _render() {
        this.updateElement();
        this._target.append(this._element);
        this.applyStyles();
    }

    _unrender() {
        this._element.remove();
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }

    applyStyles() {
        this._element.style.cssText = this.stylesToString();
    }

    stylesToString() {
        let stylesString = '';
        const styles = this._styles;
        if (!styles) {
            return '';
        }
        Object.keys(styles).map(
            styleName => stylesString += `${styleName}:${styles[styleName]};`
        );
        return stylesString;
    }

    elementResultHtml() {
        let resultString = this._template;
        const variables = this._variables;
        if (!variables) { return resultString };
        Object.keys(variables).map(
            curVar => resultString = resultString.replace(`{{${curVar}}}`, variables[curVar])
        );
        return resultString;
    }
}

class Div extends HtmlElement {
    set onClick(func) {
        this._onClick = func;
        addEventListener('click', this._onClick);
    }
}
