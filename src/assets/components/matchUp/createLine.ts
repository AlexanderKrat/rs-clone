import setOrder from './setOrder';
import deleteInputLine from './deleteInputLine';


function createLine() {
  const arrayNumbers: NodeListOf<Element> = document.querySelectorAll('.matchUp__number')

  if (arrayNumbers.length > 15){return}
    const form:Element | null = document.querySelector('.matchUp__form')

    let formItem = document.createElement('div');
    formItem.classList.add('matchUp__item');

    let number = document.createElement('div');
    number.classList.add('matchUp__number');
    formItem.appendChild(number);

    let inmutKeyword = document.createElement('input');
    inmutKeyword.classList.add('matchUp__input-keyword');
    inmutKeyword.setAttribute("required", 'true');
    formItem.appendChild(inmutKeyword);

    let inmutDefinition = document.createElement('input');
    inmutDefinition.classList.add('matchUp__input-definitio');
    inmutDefinition.setAttribute("required", 'true');
    formItem.appendChild(inmutDefinition);

    let matchUpButtonDelete = document.createElement('button');
    matchUpButtonDelete.classList.add('matchUp__input-delete');
    matchUpButtonDelete.setAttribute("formnovalidate", 'true');

    formItem.appendChild(matchUpButtonDelete);

    form?.appendChild(formItem);
    deleteInputLine(matchUpButtonDelete, formItem)
    setOrder()
}

export default createLine
