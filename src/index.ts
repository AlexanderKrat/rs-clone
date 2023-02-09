import './assets/styles/index.scss';
import { Sticks } from './assets/components/sticks/paper'
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';
import createObgectFromString from './assets/components/createObgectFromString';
import createCell from './assets/components/createCell';
import dragDrop from './assets/components/matchUp/drop';



let game = `nameGame=machUp&title=Match%2520Up&arr=asd%2Casd%2Casd%2Cddd%2Caaaa%2Cgggg`

createCell(createObgectFromString(game))

createGameSelectionBlock()

window.addEventListener("popstate", e => {
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash);





