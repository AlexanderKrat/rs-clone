import createObgectFromString from "../createObgectFromString"
import dataGame from "../data/dataGame"
import dragDrop from "./drop";
import setOrder from "./setOrder";
import startStopGame from "./startStopGame";
import submitGame from "./submitGame";

function openMatchUpGame(URL: string) {
  const object = createObgectFromString(URL)
  createMainMatchUp(object)
  
  const array = object.arr.split(',')
  for (let i = 0; i < array.length; i++) {
    createBlockMatchUp(array[i], array[++i])
  }
  setOrder()
  dragDrop()
  
}
export default openMatchUpGame

function createMainMatchUp(object: dataGame) {
  const body = document.querySelector('.main');
  let matchUp = document.createElement('div');
  matchUp.classList.add('matchUp-game');
  matchUp.innerHTML = `
    <div class="matchUp-game__title">${object.title.replace(/%20/g, ' ')}</div>
    <div class="matchUp-game__time"></div>
      <div class="matchUp-game__form user-select">
        <span class="matchUp-game__subtitle">
          <div>keyword</div>
          <div>definitio</div>
        </span>
      </div>
    <button class="matchUp-game__start">start</button>
    <button class="matchUp-game__stop">stop</button>
    <button class="matchUp-game__submit">Submit</button>
    `
  matchUp.addEventListener('click', startStopGame)
  body?.appendChild(matchUp);
  submitGame(object)
}

function createBlockMatchUp(keyword:string, definitio:string) {
  const matchUpForm = document.querySelector('.matchUp-game__form');
  let item = document.createElement('div');
 item.classList.add('matchUp-game__item');
  item.innerHTML =
    `  
  <div class="matchUp-game__number"></div>
  <div class="matchUp-game__keyword box">
    <div draggable="true" class="matchUp-game__drop">${keyword}</div>
  </div>
  <div class="matchUp-game__empty box"></div>
  <div class="matchUp-game__definitio">${definitio}</div>
`
  matchUpForm?.appendChild(item)
}
