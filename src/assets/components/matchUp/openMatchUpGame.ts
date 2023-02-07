import createObgectFromString from "../createObgectFromString"
import dataGame from "../data/dataGame"

function openMatchUpGame(URL:string) {
const object = createObgectFromString(URL)
console.log(object);
createMainMatchUp(object)
}
export default openMatchUpGame

function createMainMatchUp(object:dataGame) {
    const body = document.querySelector('.main')
    let matchUp = document.createElement('div');
    matchUp.classList.add('matchUp')
    matchUp.innerHTML = `
    <div class="matchUp__title">
      <div class="matchUp__form">
        <span class="matchUp__subtitle">
          <div>keyword</div>
          <div>definitio</div>
        </span>
       
        <div class="matchUp__item">
          <div class="matchUp__number">1</div>
          <div class="matchUp__input-keyword">asd</div>
          <div class="matchUp__input-definitio">asd</div>
        </div>
  
      </div>
      <button class="matchUp__start">start</button>
      <button class="matchUp__stop">stop</button>
    </div>
    `

  body?.appendChild(matchUp)
}