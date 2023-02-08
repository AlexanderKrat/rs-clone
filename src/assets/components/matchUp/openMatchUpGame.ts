import createObgectFromString from "../createObgectFromString"
import createCell from "../createCell";
import dataGame from "../data/dataGame"
import setOrder from "./setOrder";

function openMatchUpGame(URL: string) {
  
  const object = createObgectFromString(URL)
  createCell(object.title)
  createMainMatchUp(object)

  const array = object.arr.split(',')
  for (let i = 0; i < array.length; i++) {
    createBlockMatchUp(array[i], array[++i])
  }
 
  setOrder()
}
export default openMatchUpGame

function createMainMatchUp(object: dataGame) {
  const body = document.querySelector('.main');
  let matchUp = document.createElement('div');
  matchUp.classList.add('matchUp-game');
  matchUp.innerHTML = `
    <div class="matchUp__title">${object.title}</div>
      <div class="matchUp__form">
        <span class="matchUp__subtitle">
          <div>keyword</div>
          <div>definitio</div>
        </span>
      </div>
    <button class="matchUp__start">start</button>
    <button class="matchUp__stop">stop</button>
    `
  body?.appendChild(matchUp)
}

function createBlockMatchUp(keyword:string, definitio:string) {
  const matchUpForm = document.querySelector('.matchUp__form');
  let item = document.createElement('div');
  item.classList.add('matchUp__item');
  item.innerHTML =
    `  
  <div class="matchUp__number"></div>
  <div class="matchUp__input-keyword">${keyword}</div>
  <div class="matchUp__input-definitio">${definitio}</div>
`
  matchUpForm?.appendChild(item)
}
