import dataGame from "../data/dataGame";

function submitGame(obj:dataGame) {
    const matchUpSubmit = document.querySelector('.matchUp-game__submit')
    matchUpSubmit?.addEventListener('click', ()=>{
        const definitio = document.querySelectorAll('.matchUp-game__definitio');
        const drop = document.querySelectorAll('.matchUp-game__drop');

        for (let i = 0; i < drop.length; i++) {
            if(definitio[i] == drop[i]){
                drop[i].classList.add('drop-true')
            }
            if(definitio[i] != drop[i]){
                drop[i].classList.add('drop-false')
            }
        }
    })
}
export default submitGame;