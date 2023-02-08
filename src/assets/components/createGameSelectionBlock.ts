import openGameSettings from "./openGameSettings";
import openSection from "./openSection";

function createGameSelectionBlock() {
    const main = document.querySelector('.main')
    let selectionBlock = document.createElement('div');
    selectionBlock.classList.add('selectionBlock')
    selectionBlock.innerHTML = `
    <div class="selectionBlock__title">Сhoose a game</div>
    <div class="selectionBlock__block">
        <div class="selectionBlock__item maatchUp-button">
            <div class="selectionBlock__subtitle">Maatch Up</div>
        </div>
        <div class="selectionBlock__item wordMagnets-button">
            <div class="selectionBlock__subtitle">Word Magnets</div>
        </div>
        <div class="selectionBlock__item">
            <div class="selectionBlock__subtitle">Word Magnets</div>
        </div>
    </div>`
    selectionBlock.addEventListener('click', openGameSettings)
    main?.appendChild(selectionBlock)
}
export default createGameSelectionBlock