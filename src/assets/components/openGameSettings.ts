import createBaseMathUp from "./matchUp/createBaseMathUp";
import openSection from "./openSection";
import { Sticks } from "./sticks/paper";

function openGameSettings(e:Event) {
    const target = e.target;
   
    if (!(target instanceof HTMLElement)) { return };
    if (target.classList.contains('maatchUp-button')){
        if(!document.querySelector('.matchUp')){
            createBaseMathUp()
        }
        openSection('matchUp')
    }
    if (target.classList.contains('wordMagnets')){
        
    }
    if (target.classList.contains('sticks-button')){
        document.querySelector('.sticks-place')?.remove()
        const newSticks = new Sticks();
        newSticks.create();
        newSticks.check();
        newSticks.randomizer();
        openSection('sticks-place')
    }
}
export default openGameSettings