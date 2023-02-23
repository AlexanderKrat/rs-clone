import './assets/styles/index.scss';
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';
import createCell from './assets/components/createCell';
import interactionAccounts from './assets/components/interactionAccounts';
import AccountData from './assets/components/data/AccountData';
import DataAccount from './assets/components/data/DataAccount';
import openLogin from './assets/components/popupLogin/openLogin';
import createPopupLogin from './assets/components/popupLogin/createPopupLogin';
import createPopupRegister from './assets/components/popupLogin/createPopupRegister';
import checkAccaunt from './assets/components/accaunr/checkAccaunt';

createPopupLogin()
createPopupRegister()

const header = document.querySelector('.header__container');
header?.addEventListener('click', openLogin);


const id = localStorage.getItem('id')
if(!id){
  const game = `nameGame=machUp&title=Match%2520Up&arr=11%2C1%2C12%2C2%2C13%2C3`
  createCell(game)
  const sticksGame = 'nameGame=sticks&title=Sticks&arr=Look%20forward%20to|C%20нетерпением%20ждать%20чего-то@Carry%20on|Продолжать%20заниматься%20чем-то@Pass%20out|Терять%20сознание@Run%20out|Закончиться@Stand%20by|Приготовиться@Work%20out|Тренероваться@Watch%20out|Быть%20начеку@Give%20up|Сдаваться@Catch%20up|Наверстать@Pick%20out|Выбирать'
  createCell(sticksGame)
}else{
  interactionAccounts.getGameBlock(+id).then((data)=>{
    for (const key in data) {
      if (key != 'id'){
        createCell(data[key]);
      }
    }
  })
}


createGameSelectionBlock()

window.addEventListener("popstate", e => {
  render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash);

checkAccaunt()
// interactionAccounts.getAcount("ExampleName1", "ExamplePassword1").then((date:number) => {
//   console.log(date)
// });
// interactionAccounts.getGames(1).then((date: object) => console.log(date));



//create Account----------
// const data: AccountData = {
//   "name": "ExampleName0",
//   "password": "ExamplePassword22",
// }
// interactionAccounts.createAcount(data).then((date: DataAccount) => {
//   if (date) {
//     interactionAccounts.createGameBlock(date.id)
//   }
//   console.log(date ? date : 'error')
// });


//----------------

// interactionAccounts.getAccountsList().then((d) => {
//   console.log(d);
// })


//add game---------
// const a: object = {
//   "name1": "ExampleName",
//   }
// interactionAccounts.addGameBlock(a, 1).then((d) => {
//   console.log(d);
// })
// //------
// //delete game--------
// interactionAccounts.deleteItemInGameBlock('name1', 1)
// .then((d) => {
//   console.log(d);
// })
// //------
// interactionAccounts.getGameBlock(1).then((d) => {
//   console.log(d);
// })