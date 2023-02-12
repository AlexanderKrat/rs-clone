import createBaseMathUp from "./matchUp/createBaseMathUp";
import formForSticks from './sticks/formForSticks'
import openSection from "./openSection";

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
        formForSticks()
        openSection('sticks-form')
    }
}
export default openGameSettings