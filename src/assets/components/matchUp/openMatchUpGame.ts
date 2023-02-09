import createObgectFromString from "../createObgectFromString"
import createCell from "../createCell";
import dataGame from "../data/dataGame"
import setOrder from "./setOrder";

function openMatchUpGame(URL: string) {
  const object = createObgectFromString(URL)
  
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
  
  object.title = object.title.replace(/%20/g, ' ');
  matchUp.classList.add('matchUp-game');
  matchUp.innerHTML = `
    <div class="matchUp-game__title">${object.title}</div>
      <div class="matchUp-game__form">
        <span class="matchUp-game__subtitle">
          <div>keyword</div>
          <div>definitio</div>
        </span>
      </div>
    <button class="matchUp-game__start">start</button>
    <button class="matchUp-game__stop">stop</button>
    `
  body?.appendChild(matchUp)
}

function createBlockMatchUp(keyword:string, definitio:string) {
  const matchUpForm = document.querySelector('.matchUp-game__form');
  let item = document.createElement('div');
  item.classList.add('matchUp-game__item');
  item.innerHTML =
    `  
  <div class="matchUp-game__number"></div>
  <div class="matchUp-game__keyword">${keyword}</div>
  <div class="matchUp-game__definitio">${definitio}</div>
`
  matchUpForm?.appendChild(item)
}
