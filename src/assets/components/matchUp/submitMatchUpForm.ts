import criateURL from '../criateURL'
import dataGame from '../data/dataGame';
import openMatchUpGame from './openMatchUpGame';

function submitMatchUpForm(e: Event) {
    const matchUpTitle: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp__title');
    const inputKeyword: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp__input-keyword');
    const inputDefinitio: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp__input-definitio');
    let allInputs: Element[] = [...matchUpTitle, ...inputKeyword, ...inputDefinitio];
    let flag: boolean = false;

    allInputs.forEach(element => {
        if (!(element instanceof HTMLInputElement)) { return };
        if (!element.value) { flag = true };
    });
    if (flag) { return };

    const data: dataGame = {
        nameGame: 'machUp',
        title: matchUpTitle[0].value,
        arr: setArray(),
    }

    function setArray() {
        let array: String[][] = [];
        inputKeyword.forEach((element, index) => {
            if (!(element instanceof HTMLInputElement)) { return };
            array.push([element.value, inputDefinitio[index].value])
        });
        return array
    }

    const URL =  criateURL(data)
    openMatchUpGame(URL)
}
export default submitMatchUpForm