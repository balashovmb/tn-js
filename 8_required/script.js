const el = new HtmlElement();
el.template = `<div><p> 1. {{z1}}</p> <p>2. {{p1}}</p></div> `;
el.target = document.getElementById('target');
el.variables = {z1: 'Один', p1: 'Два' };
el.styles = {color: 'red'};
el.render();

const div = new Div();
div.template = `<div>1234</div> `;
div.target = document.getElementById('target');
div.render();
div.onClick = () => (console.log('!'));


const input = new Input();
input.template = `<input type="text"/>`
input.target = document.getElementById('target');
input.render();
input.onInput = (e) => (console.log(e.data));
input.onFocus = (e) => (console.log(e.target.value));