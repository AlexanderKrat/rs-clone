import createObgectFromString from "./createObgectFromString";
import criateURL from "./criateURL";
import dataGame from "./data/dataGame";
import openMatchUpGame from "./matchUp/openMatchUpGame";
import openSection from "./openSection";

function createCell(URL:string) {
    const obj = createObgectFromString(URL);
    const main = document.querySelector('.main__container');
    const root = document.createElement('div');
    root!.id = obj.title
    
    createCellListener(obj, root)
    root.classList.add('game-container')

    root.innerHTML = `
    <div class="game-container__image"></div>
    <div class="game-container__block">
      <div class="game-container__title">${obj.title.replace(/%20/g, ' ')}</div>
      <div class="game-container__description">${obj.title.replace(/%20/g, ' ')}</div>
   `;
    main?.appendChild(root);
    
}
export default createCell
function createCellListener(obj:dataGame, element:HTMLElement) {
  console.log(obj);
  element.addEventListener('click', ()=>{
    openSection('matchUp-game');
    openMatchUpGame(criateURL(obj));
    })
}
