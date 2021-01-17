import { h, Component, render } from "preact";
import htm from "htm";

const html = htm.bind(h);

function App(props: any) {
  return html`<h1>Hello ${props.name}!</h1>`;
}

render(html`<${App} name="World" />`, document.body);
