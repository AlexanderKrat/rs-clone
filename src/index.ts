import './assets/styles/index.scss';
import { Sticks } from './assets/components/sticks/paper'
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';




createGameSelectionBlock()

window.addEventListener("popstate", e => {
    console.log(1);
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash)





