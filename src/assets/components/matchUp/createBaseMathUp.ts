import createLine from './createLine';
import submitMatchUpForm from './submitMatchUpForm';

function createBaseMathUp() {
  let blockMatchUp = document.createElement('form');
  blockMatchUp.classList.add('matchUp');
  blockMatchUp.setAttribute('onSubmit', 'return false')
 
  let titleMatchUp = document.createElement('input');
  titleMatchUp.value = 'Match Up'
  titleMatchUp.classList.add('matchUp__title');
  titleMatchUp.setAttribute("required", 'true');
  blockMatchUp.appendChild(titleMatchUp)

  let block = document.createElement('div');
  block.classList.add('matchUp__form');

  let subtitle = document.createElement('span');
  subtitle.classList.add('matchUp__subtitle');

  let keyword = document.createElement('div');
  keyword.textContent = 'keyword';
  subtitle.appendChild(keyword);

  let definitio = document.createElement('div');
  definitio.textContent = 'definitio';
  subtitle.appendChild(definitio);

  block.appendChild(subtitle);

  blockMatchUp.appendChild(block);

  let createLineBtm = document.createElement('button');
  createLineBtm.classList.add('matchUp__create-line');
  createLineBtm.textContent = 'add';
  createLineBtm.setAttribute("formnovalidate", 'true');
  createLineBtm.addEventListener('click', createLine);
  blockMatchUp.appendChild(createLineBtm);

  let submit = document.createElement('button');
  submit.classList.add('matchUp__submit');
  submit.textContent = 'submit';
  submit.addEventListener('click', submitMatchUpForm)
  blockMatchUp.appendChild(submit);

  const main = document.querySelector('.main');

  main?.appendChild(blockMatchUp);
  createLine();
  createLine();
  createLine();
}

export default createBaseMathUp
