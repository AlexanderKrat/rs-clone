import createLineForm from './createLineForm';
import createReplaceWords from './createObjectSticks';

function formForReplaceWords() {
  if (!document.querySelector('.ReplaceWords-form')) {
    const main = document.querySelector('.main');
    const divForm = document.createElement('div');
    divForm.classList.add('ReplaceWords-form');
    const form = document.createElement('form');
    form.setAttribute('onSubmit', 'return false');
    form.classList.add('ReplaceWords-form-main');
    const input = document.createElement('input');
    input.type = 'text';
    divForm.appendChild(input);
    main?.prepend(divForm);

    input.value = 'ReplaceWords';
    input.classList.add('input-name-sticks');
    input.placeholder = 'Enter game name';

    const divTitle = document.createElement('div');
    divTitle.classList.add('input-name-sticks');
    divTitle.classList.add('input__question__sticks');
    divForm.appendChild(divTitle);
    const question = document.createElement('div');
    divTitle.appendChild(question);
    divForm.appendChild(form);

    const addButton = document.createElement('button');
    addButton.innerHTML = 'Add line';
    const subButton = document.createElement('button');
    subButton.innerHTML = 'Submit';
    const spanButton = document.createElement('div');
    spanButton.classList.add('stick-form-buttons');
    form.prepend(spanButton);
    spanButton.appendChild(addButton);
    spanButton.appendChild(subButton);
    addButton.classList.add('sticks-form-button');
    subButton.classList.add('sticks-form-button');

    question.innerHTML = 'Sentence';

    createLineForm();

    addButton.addEventListener('click', createLineForm);

    subButton.addEventListener('click', createReplaceWords);
  }
}
export default formForReplaceWords;
