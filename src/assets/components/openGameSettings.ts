import createBaseMathUp from "./matchUp/createBaseMathUp";
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
}
export default openGameSettings