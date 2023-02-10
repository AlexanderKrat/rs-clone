import './assets/styles/index.scss';
import { Sticks } from './assets/components/sticks/paper'
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';
import createCell from './assets/components/createCell';

const game = `nameGame=machUp&title=Match%20Up&arr=asd%2Casd%2Casd%2Cddd%2Caaaa%2Cgggg`
createCell(game)

createGameSelectionBlock()

window.addEventListener("popstate", e => {
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash);





