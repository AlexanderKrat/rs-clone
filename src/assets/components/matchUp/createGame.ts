import createLine from './createLine';

function createMainGame() {
    let blockMatchUp = document.createElement('div');
    blockMatchUp.classList.add('matchUp');
    //title input
    let titleMatchUp = document.createElement('input');
    titleMatchUp.value = 'Match Up'
    titleMatchUp.classList.add('matchUp__title');
    blockMatchUp.appendChild(titleMatchUp)
    //form
    let form = document.createElement('form');
    form.classList.add('matchUp__form');

    let keyword = document.createElement('div');
    keyword.classList.add('matchUp__subtitle');
    keyword.textContent = 'keyword';
    form.appendChild(keyword);

    let definitio = document.createElement('div');
    definitio.classList.add('matchUp__subtitle');
    definitio.textContent = 'definitio';
    form.appendChild(definitio);
    blockMatchUp.appendChild(form);
   
    let createLineBtm = document.createElement('button');
    createLineBtm.classList.add('matchUp__create-line');
    createLineBtm.textContent = 'add';
    createLineBtm.addEventListener('click', createLine);
    blockMatchUp.appendChild(createLineBtm);

    const main = document.querySelector('.main');
    console.log(main);
    main?.appendChild(blockMatchUp);
    createLine();
    createLine();
    createLine();
}

export default createMainGame