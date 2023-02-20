import './assets/styles/index.scss';
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';
import createCell from './assets/components/createCell';

const game = `nameGame=machUp&title=Match%2520Up&arr=11%2C1%2C12%2C2%2C13%2C3`
createCell(game)
const sticksGame = 'nameGame=sticks&title=Sticks&arr=Look%20forward%20to|C%20нетерпением%20ждать%20чего-то@Carry%20on|Продолжать%20заниматься%20чем-то@Pass%20out|Терять%20сознание@Run%20out|Закончиться@Stand%20by|Приготовиться@Work%20out|Тренероваться@Watch%20out|Быть%20начеку@Give%20up|Сдаваться@Catch%20up|Наверстать@Pick%20out|Выбирать'
createCell(sticksGame)

createGameSelectionBlock()

window.addEventListener("popstate", e => {
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash);





