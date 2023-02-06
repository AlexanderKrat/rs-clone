function createLine() {
    const form:Element | null = document.querySelector('.matchUp__form')

    let formItem = document.createElement('div');
    formItem.classList.add('matchUp__item');
    
    let number = document.createElement('div');
    number.classList.add('matchUp__number');
    formItem.appendChild(number);

    let inmutKeyword = document.createElement('input');
    inmutKeyword.classList.add('matchUp__input-keyword');
    formItem.appendChild(inmutKeyword);

    let inmutDefinition = document.createElement('input');
    inmutDefinition.classList.add('matchUp__input-definitio');
    formItem.appendChild(inmutDefinition);

    let matchUpInputDelete = document.createElement('button');
    matchUpInputDelete.classList.add('matchUp__input-delete');
    formItem.appendChild(matchUpInputDelete);

    form?.appendChild(formItem);
}

export default createLine