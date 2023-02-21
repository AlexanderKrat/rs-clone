import './assets/styles/index.scss';
import './assets/styles/index.scss';
import createGameSelectionBlock from './assets/components/createGameSelectionBlock';
import render from './assets/components/router';
import createCell from './assets/components/createCell';

const game = `nameGame=machUp&title=Match%2520Up&arr=11%2C1%2C12%2C2%2C13%2C3`
createCell(game)

createGameSelectionBlock()

window.addEventListener("popstate", e => {
    render(new URL(window.location.href).hash)
});
render(new URL(window.location.href).hash);
async function TestGet() {
  let response = await fetch('http://localhost:3000/accounts');
  const data = await response.json();
  const NameFromInput= 'ExampleName2'; 
  const PasswordFromInput= 'ExamplePassword2';
  data.forEach((account: {[x: string]: string}) => {
    if(account['Name'] === NameFromInput && account['Password'] === PasswordFromInput){
      console.log(
      account['MatchUpData'],
      account[]
      );
    }
})
}
TestGet()