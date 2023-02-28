import createCell from '../createCell';
import interactionAccounts from '../interactionAccounts';
import dataGame from '../data/dataGame';
import criateURL from '../criateURL';
import createGame from './playGame';

function createReplaceWordsFromForm() {
  const title:NodeListOf<HTMLInputElement> = document.querySelectorAll('.input-name-sticks');
  const Arr:Array<Array<string>> = [];
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input-in-form');
  inputs.forEach((input) => {
    Arr.push(input.value.split(' '));
  });
  const gameData:dataGame = {
    nameGame: 'ReplaceWords',
    title: title[0].value,
    arr: Arr,
  };
  const url:string = criateURL(gameData);
  createCell(url);
  createGame(url);
}
export default createReplaceWordsFromForm;
