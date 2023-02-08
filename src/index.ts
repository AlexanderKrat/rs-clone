import './assets/styles/index.scss';
import { Sticks } from './paper'
import './paper.scss';
import createMainGame from "./assets/components/matchUp/createGame";
const main = document.querySelector('.main__container');
const addGame = document.querySelector('.main__button');
const sticks = document.querySelector('.sticks') as HTMLElement
sticks!.addEventListener('click', () => {
  const addButton = addGame as HTMLButtonElement;
  sticks.style.display = 'none'
  addButton.style.display = 'none'
  const newSticks = new Sticks();
  newSticks.create()
  newSticks.check()
})
addGame?.addEventListener('click', ()=>{
  console.log(main)
let Data:{gameName:string;description:string} = {
  gameName: 'gameName',
  description: 'someText'
}
  const html = `
  <div class="game-container__image"></div>
  <div class="game-container__block">
    <div class="game-container__title">${Data['gameName']}</div>
    <div class="game-container__description">${Data['description']}</div>
 `;
  const root = document.createElement('div');
  root.classList.add('game-container')
  root.innerHTML = html;
  main?.appendChild(root);
})


