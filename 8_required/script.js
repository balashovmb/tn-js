el = new HtmlElement();
el.template = `<div><p> 1 {{z1}}</p> <p>2 {{p1}}</p></div> `;
el.target = document.getElementById('target');
el.variables = {z1: 'zdraste', p1: 'poka' };
el.elementResultHtml();
el.styles = {color: 'red'};

el.render();

div = new Div();

div.template = `<div>1234</div> `;
div.target = document.getElementById('target');
div.render();
div.onClick = () => (console.log('!')) 