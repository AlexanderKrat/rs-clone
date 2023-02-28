import createObgectFromString from '../createObgectFromString';
import openSection from '../openSection';

function createGame(URL:string) {
  const object = createObgectFromString(URL);
  openSection('Replace-words-game');
  const main = document.querySelector('.main');
  const game = document.createElement('div')
  game.classList.add('Replace-words-game')
  main?.append(game);
  const dataArr = object.arr.split(',').slice(0);
  const title = document.createElement('div')
  title.innerHTML = `${object.title}`;
  title.classList.add('replace-words__title')
  game?.append(title);
  const sortArea = document.createElement('div')
  sortArea.classList.add('replace-words__drag-container')
  game.append(sortArea)

  function ReplaceWords(arrayEl:Array<string>){
    function shuffle(arrayEl:Array<string>) {
      for (let i = arrayEl.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayEl[i], arrayEl[j]] = [arrayEl[j], arrayEl[i]];
      }
      return arrayEl;
    }
    const randomArray2 = shuffle(arrayEl);
    return randomArray2;
  }

  function checkWin(){
   const words = document.querySelectorAll('.replace-words__drag-element');
   const dataAfterMove:Array<string> = [];
   words.forEach(word =>{
    dataAfterMove.push(word.innerHTML);
   })
   if(dataAfterMove.toString() == object.arr.split(',').toString()){
    alert('You win!')
   }
  }
  let element1: HTMLElement;
  let element2: HTMLElement;
  ReplaceWords(dataArr).forEach((element:string)=>{
    let word = document.createElement('div');
    word.classList.add('replace-words__drag-element')
    word.draggable = true;
    word.innerHTML = element;
    sortArea.append(word)
  word.addEventListener('dragstart', (e)=>{
    const {target} = e;
    element1 = target as HTMLElement;
  })
  word.addEventListener('dragover', (event)=>{
    event.preventDefault();
    const {target} = event;
    element2 = target as HTMLElement;
  })
  word.addEventListener('dragend', ()=>{
    let innerHTMLsave = element2.innerHTML;
    element2.innerHTML = element1.innerHTML;
    element1.innerHTML = innerHTMLsave;
    checkWin()
  })
  })
}
export default createGame;
