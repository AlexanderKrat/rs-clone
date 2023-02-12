import './assets/styles/index.scss';
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';




createGameSelectionBlock()

window.addEventListener("popstate", e => {
    console.log(1);
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash)





