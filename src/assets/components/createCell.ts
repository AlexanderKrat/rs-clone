import createObgectFromString from "./createObgectFromString";
import criateURL from "./criateURL";
import dataGame from "./data/dataGame";
import openMatchUpGame from "./matchUp/openMatchUpGame";
import openSection from "./openSection";
import shareGame from "./shareGame";

function createCell(URL: string) {
  const obj = createObgectFromString(URL);
  const main = document.querySelector('.main__container');
  const root = document.createElement('div');
  // root!.id = obj.title

  createCellListener(obj, root)
  root.classList.add('game-container')
  root.classList.add(obj.title)
  root.innerHTML = `
    <div class="game-container__image"></div>
    <div class="game-container__block">
      <div class="game-container__title">${obj.title.replace(/%20/g, ' ')}</div>
      <div class="game-container__description">${obj.title.replace(/%20/g, ' ')}</div>
    </div>
    `;
  let share = document.createElement('div');
  share.classList.add('game-container__share');
  root?.appendChild(share);
  main?.appendChild(root);
  shareGame(URL, share)
}
export default createCell
function createCellListener(obj: dataGame, element: HTMLElement) {
  element.addEventListener('click', (e) => {
    const currentTarget = e.currentTarget;
    const target = e.target
    if (!(target instanceof HTMLElement)) { return };
    if (target.classList.contains('game-container__share')) { return }
    
    if (!(currentTarget instanceof HTMLElement)) { return };
    if (currentTarget.classList.contains('Match%20Up')) {
      openSection('matchUp-game');
      openMatchUpGame(criateURL(obj));
    }
  })
}
