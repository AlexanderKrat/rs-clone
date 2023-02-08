import './assets/styles/index.scss';
import createBaseMathUp from "./assets/components/matchUp/createBaseMathUp";
import openSection from './assets/components/openSection';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router'


createGameSelectionBlock()


window.addEventListener("popstate", e => {
    console.log(1);
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash)


