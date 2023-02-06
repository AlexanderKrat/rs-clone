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
    form.setAttribute('onSubmit', 'return false')

    let subtitle = document.createElement('span');
    subtitle.classList.add('matchUp__subtitle');

    let keyword = document.createElement('div');
    keyword.textContent = 'keyword';
    subtitle.appendChild(keyword);

    let definitio = document.createElement('div');
    definitio.textContent = 'definitio';
    subtitle.appendChild(definitio);


    form.appendChild(subtitle);


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
