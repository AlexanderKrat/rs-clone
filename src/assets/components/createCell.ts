import criateURL from "./criateURL";
import dataGame from "./data/dataGame";
import openMatchUpGame from "./matchUp/openMatchUpGame";
import openSection from "./openSection";

function createCell(obj:dataGame) {
    const main = document.querySelector('.main__container');
   
    const root = document.createElement('div');
    root!.id = obj.title
    
    createCellListener(obj, root)
    obj.title = obj.title.replace(/%20/g, ' ');
    root.classList.add('game-container')
   
    root.innerHTML = `
    <div class="game-container__image"></div>
    <div class="game-container__block">
      <div class="game-container__title">${obj.title}</div>
      <div class="game-container__description">${obj.title}</div>
   `;
    main?.appendChild(root);
}
export default createCell
function createCellListener(obj:dataGame, element:HTMLElement) {
  element.addEventListener('click', ()=>{
    if(obj.nameGame == 'machUp'){
      openSection('matchUp-game');
      openMatchUpGame(criateURL(obj));
    }
  })
}
